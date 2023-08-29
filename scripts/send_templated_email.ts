// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sesv2/command/SendEmailCommand/

import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import "dotenv/config";
// import { params } from "./send_template_email_params/BRANDED_HEADER_AND_MAIN_AND_FOOTER";
// import { params } from "./send_template_email_params/BRANDED_JOB_COMPLETE";
import { params } from "./send_template_email_params/FUN_STATIONARY_THEME";

async function main() {
  try {
    const client = new SESv2Client({
      region: process.env.AWS_REGION!,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const command = new SendEmailCommand(params);
    const response = await client.send(command);

    console.log("response", response);
  } catch (e) {
    console.error(e);
  }
}

main();
