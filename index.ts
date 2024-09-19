import express from "express";
import { render } from "@react-email/components";
import { ServerClient } from "postmark";
import dotenvFlow from "dotenv-flow";
import config from "./config";
dotenvFlow.config();

const app = express();
const port = 3000;

app.use(express.json());

const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN!);

app.get("/", (req, res) => {
  res.send("TemplateMailer is running");
});

// Route handler for the POST request
app.post("/", async (req, res) => {
  // Get the authorization header
  const authHeader = req.headers.authorization;

  // Check if the Authorization header is present
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header is missing" });
  }

  // Split the header to extract the token (assuming it's in the format 'Bearer <token>')
  const token = authHeader.split(" ")[1]; // Splitting by space and getting the second part (the token)

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ error: "Token is missing" });
  }

  // Check if the token is valid format
  if (!/^[a-zA-Z0-9-]+$/.test(token)) {
    return res.status(401).json({ error: "Token is invalid" });
  }

  // Extract the request body
  const { from, to, templateAlias, templateModel } = req.body;

  // Check if all required fields are present
  if (!from || !to || !templateAlias) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log("From:", from);
  console.log("To:", to);
  console.log("TemplateAlias:", templateAlias);
  console.log("TemplateModel:", templateModel);

  var templateConfig = ((config as any)[token] as any)[templateAlias];
  var templateComponent = templateConfig.email;

  if (templateComponent === null) {
    return res.status(400).json({ error: "TemplateName is invalid" });
  }

  await client.sendEmail({
    From: from,
    To: to,
    Subject: templateConfig.subject,
    HtmlBody: await render(templateComponent(templateModel)),
  });

  console.log("Sent email.");

  // Respond with success
  return res
    .status(200)
    .json({ message: "Email with template sent successfully" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`TemplateMailer is running on port ${PORT}`);
});

// Export the Express API for Vercel
module.exports = app;
