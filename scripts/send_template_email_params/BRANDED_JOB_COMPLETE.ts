import { SendEmailCommandInput } from "@aws-sdk/client-sesv2";

export const params: SendEmailCommandInput = {
  FromEmailAddress: "support@kalygo.io",
  Destination: {
    ToAddresses: ["tad@cmdlabs.io", "cmdlabs.2cb7@litmusemail.com"],
  },
  Content: {
    Template: {
      TemplateName: "BRANDED_JOB_COMPLETE",
      TemplateArn:
        "arn:aws:ses:us-east-1:333427308013:template/BRANDED_JOB_COMPLETE",
      TemplateData: `{
              \"SUBJECT"\: \"Your summary is complete\",
              \"MESSAGE_AS_TEXT\": \"Click to view your summary: https://kalygo.io\",
              \"EMAIL_PREVIEW_TEXT\": \"Your summary is complete\",
              \"TITLE\":\"Your summary is complete\",
              \"CTA_TEXT\":\"View summary\",
              \"CTA_URL\":\"https://kalygo.io\"
            }`,
    },
  },
  ConfigurationSetName: "kalygo_config_set",
};
