// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sesv2/command/SendEmailCommand/

import {
  SESv2Client,
  SendEmailCommandInput,
  SendEmailCommand,
} from "@aws-sdk/client-sesv2";

import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

async function main() {
  try {
    const client = new SESv2Client({
      region: process.env.AWS_REGION!,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const params: SendEmailCommandInput = {
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

    const command = new SendEmailCommand(params);
    const response = await client.send(command);

    console.log("response", response);
  } catch (e) {
    console.error(e);
  }
}

main();
