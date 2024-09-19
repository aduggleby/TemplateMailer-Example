import Welcome from "./emails/postmark-migration/welcome";

export default {
  // The token to use for authorization
  MYTOKEN123: {
    // The email templates
    welcome: {
      email: Welcome,
      subject: "Postmark Migration Test",
    },
  },
};
