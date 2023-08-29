import { SendEmailCommandInput } from "@aws-sdk/client-sesv2";

export const params: SendEmailCommandInput = {
  FromEmailAddress: "support@kalygo.io",
  Destination: {
    ToAddresses: ["tad@cmdlabs.io"],
  },
  Content: {
    Template: {
      TemplateName: "BRANDED_HEADER_AND_MAIN_AND_FOOTER",
      TemplateArn:
        "arn:aws:ses:us-east-1:333427308013:template/BRANDED_HEADER_AND_MAIN_AND_FOOTER",
      TemplateData: `{
              \"SUBJECT"\: \"Verify your email\",
              \"MESSAGE_AS_TEXT\": \"Verify your email\",
              \"EMAIL_PREVIEW_TEXT\": \"Verify your email\",
              \"HEADER_LOGO_ONCLICK_URL\":\"https://kalygo.io\",
              \"HEADER_LOGO_IMAGE\":\"https://kalygo.io/kalygo_new_logo-192x192.png\",
              \"HEADER_TEXT\":\"Welcome to Kalygo\",
              \"MAIN_SECTION_TEXT\":\"Click below to verify your email\",
              \"CTA_URL\":\"https://kalygo.io\",
              \"CTA_TEXT\":\"Click to verify\",
              \"FOOTER_TEXT_TITLE\":\"Need Help?\",
              \"FOOTER_CTA_URL\":\"https://kalygo.io\",
              \"FOOTER_CTA_TEXT":\"Contact Support\"
              }`,
    },
  },
  ConfigurationSetName: "kalygo_config_set",
};
