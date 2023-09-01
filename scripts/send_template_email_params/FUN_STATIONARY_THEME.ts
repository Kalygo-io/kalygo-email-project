import { SendEmailCommandInput } from "@aws-sdk/client-sesv2";

export const params: SendEmailCommandInput = {
  FromEmailAddress: "noreply@kalygo.io",
  Destination: {
    ToAddresses: ["tad@cmdlabs.io"],
  },
  Content: {
    Template: {
      TemplateName: "FUN_STATIONARY_THEME",
      TemplateArn:
        "arn:aws:ses:us-east-1:333427308013:template/FUN_STATIONARY_THEME",
      TemplateData: `{
              \"SUBJECT"\: \"A special message for you and only you\",
              \"MESSAGE_AS_TEXT\": \"A special message for you and only you\",
              \"EMAIL_PREVIEW_TEXT\": \"A special message for you and only you\",
              \"LOGO_ONCLICK_URL\": \"https://kalygo.io\",
              \"LOGO_IMAGE_URL\": \"https://kalygo.io/kalygo_new_logo-192x192.png\",
              \"GREETING\":\"Hello\",
              \"PARAGRAPH_1\":\"Hyper-personalized message. Hyper-personalized message. Hyper-personalized message. Hyper-personalized message.\",
              \"PARAGRAPH_2\":\"Hyper-personalized message. Paragraph #2.\",
              \"PARAGRAPH_3\":\"Paragraph #3.\",
              \"ENDING\":\"Sincerely\",
              \"ENDING_SIGNATURE\":\"Tad Duval (CEO at Kalygo)\"
            }`,
    },
  },
  ConfigurationSetName: "kalygo_config_set",
};
