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

// TypeScript interface
export interface BasicProps {
  productUrl: string;
  productName: string;
  companyName: string;
  companyAddress: string;
  children: React.ReactNode;
}

const Basic = ({
  children,
  productName,
  productUrl,
  companyName,
  companyAddress,
}) => {
  const baseStyles = {
    fontFamily: '"Nunito Sans", Helvetica, Arial, sans-serif',
    color: "#51545e",
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: "#f2f4f6",
  };

  const emailWrapperStyles = {
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: "#f2f4f6",
  };

  const emailContentStyles = {
    width: "100%",
    margin: 0,
    padding: 0,
  };

  const emailMastheadStyles = {
    padding: "25px 0",
    textAlign: "center",
  };

  const emailMastheadNameStyles = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#a8aaaf",
    textDecoration: "none",
    textShadow: "0 1px 0 white",
  };

  const emailBodyStyles = {
    width: "100%",
    margin: 0,
    padding: 0,
  };

  const emailBodyInnerStyles = {
    width: "570px",
    margin: "0 auto",
    padding: 0,
    backgroundColor: "#ffffff",
  };

  const contentCellStyles = {
    padding: "45px",
  };

  const emailFooterStyles = {
    width: "570px",
    margin: "0 auto",
    padding: 0,
    textAlign: "center",
  };

  const footerTextStyles = {
    color: "#a8aaaf",
    textAlign: "center",
    fontSize: "13px",
  };

  return (
    <div style={baseStyles}>
      <table
        style={emailWrapperStyles}
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
      >
        <tr>
          <td align="center">
            <table
              style={emailContentStyles}
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
            >
              <tr>
                <td style={emailMastheadStyles}>
                  <a href={productUrl} style={emailMastheadNameStyles}>
                    {productName}
                  </a>
                </td>
              </tr>
              <tr>
                <td style={emailBodyStyles}>
                  <table
                    style={emailBodyInnerStyles}
                    align="center"
                    cellPadding="0"
                    cellSpacing="0"
                    role="presentation"
                  >
                    <tr>
                      <td style={contentCellStyles}>
                        <div>{children}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    style={emailFooterStyles}
                    align="center"
                    cellPadding="0"
                    cellSpacing="0"
                    role="presentation"
                  >
                    <tr>
                      <td style={contentCellStyles} align="center">
                        <p style={footerTextStyles}>
                          &copy; 2024 {productName}. All rights reserved.
                        </p>
                        <p style={footerTextStyles}>
                          {companyName}
                          <br />
                          {companyAddress}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Basic;
