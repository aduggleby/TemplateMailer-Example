import express from "express";
import { render } from "@react-email/components";

import { ServerClient } from "postmark";
import { Resend } from "resend";

import dotenvFlow from "dotenv-flow";
import { Liquid } from "liquidjs";
const engine = new Liquid();

import config from "./config";
dotenvFlow.config();

const app = express();
const port = 3000;

app.use(express.json());

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

  var clientType = templateConfig.client || "postmark";
  var clientToken =
    templateConfig.token !== null ? templateConfig.token(process.env) : null;
  clientToken = clientToken || process.env.POSTMARK_SERVER_TOKEN;

  var subject = await engine.render(
    engine.parse(templateConfig.subject),
    templateModel
  );

  switch (clientType) {
    case "postmark":
      console.log("Sending email with Postmark");
      var postmarkClient = new ServerClient(clientToken);
      var postmarkResult = await postmarkClient.sendEmail({
        From: from,
        To: to,
        Subject: subject,
        HtmlBody: await render(templateComponent(templateModel)),
      });
      console.log(postmarkResult);
      break;

    case "resend":
      console.log("Sending email with Resend");
      var resendClient = new Resend(clientToken);
      var resendResult = await resendClient.emails.send({
        from,
        to,
        subject,
        react: templateComponent(templateModel),
      });
      console.log(resendResult);
      break;

    default:
      return res.status(400).json({ error: "Client not setup for this token" });
  }

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
