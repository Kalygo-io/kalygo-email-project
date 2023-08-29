// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sesv2/command/CreateEmailTemplateCommand/

import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import fs from "fs";
import { SESv2Client, CreateEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import

const templateFilePath = `${process.cwd()}/./email-templates/transactional/BRANDED_HEADER_AND_MAIN_AND_FOOTER.html`;

async function main() {
  try {
    const template = fs.readFileSync(templateFilePath, "utf8");

    const client = new SESv2Client({
      region: process.env.AWS_REGION!,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const params = {
      TemplateName:
        "BRANDED_HEADER_AND_MAIN_AND_FOOTER" /* name of template in AWS SES */,
      TemplateContent: {
        Subject: "{{ SUBJECT }}",
        Text: "{{ MESSAGE_AS_TEXT }}",
        Html: template,
      },
    };

    const command = new CreateEmailTemplateCommand(params);
    const response = await client.send(command);

    console.log("response", response);
  } catch (e) {
    console.error(e);
  }
}

main();
