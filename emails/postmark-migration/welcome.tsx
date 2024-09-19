// @ts-nocheck
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";
import Basic, { BasicProps } from "./layouts/basic";

const styles = {
  h1: {
    marginTop: 0,
    color: "#333333",
    fontSize: "22px",
    fontWeight: "bold",
    textAlign: "left",
  },
  p: {
    margin: "0.4em 0 1.1875em",
    fontSize: "16px",
    lineHeight: 1.625,
    color: "#51545e",
  },
  button: {
    backgroundColor: "#3869d4",
    borderTop: "10px solid #3869d4",
    borderRight: "18px solid #3869d4",
    borderBottom: "10px solid #3869d4",
    borderLeft: "18px solid #3869d4",
    display: "inline-block",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "3px",
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.16)",
    boxSizing: "border-box",
    textAlign: "center",
  },
  attributesContent: {
    backgroundColor: "#f4f4f7",
    padding: "16px",
  },
  attributesItem: {
    padding: 0,
  },
  sub: {
    fontSize: "13px",
  },
  bodyAction: {
    width: "100%",
    margin: "30px auto",
    padding: 0,
    textAlign: "center",
  },
  contentCell: {
    padding: "45px",
  },
};

interface WelcomeProps {
  name: string;
  productUrl: string;
  productName: string;
  companyName: string;
  companyAddress: string;
  actionUrl: string;
  loginUrl: string;
  username: string;
  trialLength: string;
  trialStartDate: string;
  trialEndDate: string;
  supportEmail: string;
  liveChatUrl: string;
  senderName: string;
  helpUrl: string;
}

const Welcome = (props: WelcomeProps) => {
  let {
    name,
    productName,
    actionUrl,
    loginUrl,
    username,
    trialLength,
    trialStartDate,
    trialEndDate,
    supportEmail,
    liveChatUrl,
    senderName,
    helpUrl,
  } = props;

  return (
    <Basic {...props}>
      <h1 style={styles.h1}>Welcome, {name}!</h1>
      <p style={styles.p}>
        Thanks for trying {productName}. We’re thrilled to have you on board. To
        get the most out of {productName}, do this primary next step:
      </p>
      <table style={styles.bodyAction}>
        <tr>
          <td align="center">
            <table>
              <tr>
                <td align="center">
                  <a href={actionUrl} style={styles.button} target="_blank">
                    Do this Next
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <p style={styles.p}>For reference, here's your login information:</p>
      <table>
        <tr>
          <td style={styles.attributesContent}>
            <table>
              <tr>
                <td style={styles.attributesItem}>
                  <strong>Login Page:</strong> {loginUrl}
                </td>
              </tr>
              <tr>
                <td style={styles.attributesItem}>
                  <strong>Username:</strong> {username}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <p style={styles.p}>
        You've started a {trialLength} day trial. You can upgrade to a paying
        account or cancel any time.
      </p>
      <table>
        <tr>
          <td style={styles.attributesContent}>
            <table>
              <tr>
                <td style={styles.attributesItem}>
                  <strong>Trial Start Date:</strong> {trialStartDate}
                </td>
              </tr>
              <tr>
                <td style={styles.attributesItem}>
                  <strong>Trial End Date:</strong> {trialEndDate}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <p style={styles.p}>
        If you have any questions, feel free to{" "}
        <a href={`mailto:${supportEmail}`}>email our customer success team</a>.
        (We're lightning quick at replying.) We also offer{" "}
        <a href={liveChatUrl}>live chat</a> during business hours.
      </p>
      <p style={styles.p}>
        Thanks, <br />
        {senderName} and the {productName} Team
      </p>
      <p style={styles.p}>
        <strong>P.S.</strong> Need immediate help getting started? Check out our{" "}
        <a href={helpUrl}>help documentation</a>. Or, just reply to this email,
        the {productName} support team is always ready to help!
      </p>
      <table>
        <tr>
          <td style={styles.contentCell}>
            <p style={styles.sub}>
              If you’re having trouble with the button above, copy and paste the
              URL below into your web browser.
            </p>
            <p style={styles.sub}>{actionUrl}</p>
          </td>
        </tr>
      </table>
    </Basic>
  );
};

Welcome.PreviewProps = {
  name: "name-example",
  productUrl: "productUrl-example",
  productName: "productName-example",
  companyName: "companyName-example",
  companyAddress: "companyAddress-example",
  actionUrl: "actionUrl-example",
  loginUrl: "loginUrl-example",
  username: "username-example",
  trialLength: "trialLength-example",
  trialStartDate: "trialStartDate-example",
  trialEndDate: "trialEndDate-example",
  supportEmail: "supportEmail-example",
  liveChatUrl: "liveChatUrl-example",
  senderName: "senderName-example",
  helpUrl: "helpUrl-example",
} as WelcomeProps;

export default Welcome;
