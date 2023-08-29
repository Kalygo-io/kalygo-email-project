import "dotenv/config";
import {
  SESv2Client,
  DeleteEmailTemplateCommand,
  DeleteEmailTemplateCommandInput,
} from "@aws-sdk/client-sesv2";

// const TEMPLATE_NAME = `BRANDED_HEADER_AND_MAIN_AND_FOOTER`;
// const TEMPLATE_NAME = `BRANDED_JOB_COMPLETE`;
const TEMPLATE_NAME = `FUN_STATIONARY_THEME`;

async function main() {
  try {
    const client = new SESv2Client({
      region: process.env.AWS_REGION!,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const params: DeleteEmailTemplateCommandInput = {
      TemplateName: TEMPLATE_NAME,
    };

    const command = new DeleteEmailTemplateCommand(params);
    const response = await client.send(command);

    console.log("response", response);
  } catch (e) {
    console.error(e);
  }
}

main();
