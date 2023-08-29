var AWS = require('aws-sdk');
// Set the region 
AWS.config.loadFromPath(__dirname + '/' +  './config.json');
AWS.config.update({region: 'us-east-1'});

// Create sendEmail params 
// var params = {
//   Destination: { /* required */
//     CcAddresses: [],
//     ToAddresses: [
//       'witherberry@gmail.com'     
//     ]
//   },
//   Message: { /* required */
//     Body: { /* required */
//       Html: {
//        Charset: "UTF-8",
//        Data: "HTML_FORMAT_BODY"
//       },
//       Text: {
//        Charset: "UTF-8",
//        Data: "TEXT_FORMAT_BODY"
//       }
//      },
//      Subject: {
//       Charset: 'UTF-8',
//       Data: 'Test email'
//      }
//     },
//   Source: 'admin@witherberry.net',
//   ReplyToAddresses: [],
// };

// var params = {
//     "Source": "Witherberry <admin@witherberry.net>",
//     "Template": "MyTemplate",
//     "ConfigurationSetName": "ConfigSet",
//     "Destinations": [
//       {
//         "Destination":{
//           "ToAddresses":[
//             "dcruzart360@gmail.com"
//           ]
//         },
//         "ReplacementTemplateData":"{ \"name\":\"David\", \"favoriteanimal\":\"angelfish\" }"
//       },
//       {
//         "Destination":{ 
//           "ToAddresses":[
//             "mauricio27mc@live.com "
//           ]
//         },
//         "ReplacementTemplateData":"{ \"name\":\"Mo\", \"favoriteanimal\":\"lion\" }"
//       },
//       {
//         "Destination":{
//           "ToAddresses":[
//             "witherberry@gmail.com"
//           ]
//         },
//         "ReplacementTemplateData": "{ \"name\":\"Tad\", \"favoriteanimal\":\"shark\" }"
//       },
//     ],
//     "DefaultTemplateData":"{ \"name\":\"friend\", \"favoriteanimal\":\"unknown\" }"
//   };

var params = {
    Destination: {
      CcAddresses: [],
      ToAddresses: [
        // 'bounce@simulator.amazonses.com',
        'thadduval.lavud@gmail.com'
        // 'wavesoundstudios@gmail.com'
        // 'msteapot@me.com',
        // 'nduval@aol.com',
        // 'dcruzart360@gmail.com'
        // 'jay@intervisible-design.com',
        // 'sleddi98@gmail.com',
        // 'mauricio27mc@live.com'
        // 'dcruzart360@gmail.com'
      ]
    },
    Source: 'Witherberry <admin@witherberry.net>',
    // Source: 'Witherberry <witherberry@gmail.com>',
    Template: 'MyTemplate2',
    // TemplateData: '{ \"name\":\"Tad\", \"favoriteanimal\":\"shark\" }',
    // TemplateData: '{ \"name\":\"Mo\", \"favoriteanimal\":\"lion\" }',
    // TemplateData: '{ \"name\":\"David\", \"favoriteanimal\":\"angelfish\" }',
    // TemplateData: '{ \"RECIPIENT_NAME\":\"David\", \"SONG_TITLE\":\"PRIME LOVE\", \"SONG_LINK\":\"https://www.amazon.com/dp/B086M9WVQH/ref=sr_1_1%E2%80%A6\", \"SONG_DESCRIPTION\":\"A cosmic web with undertones of love and angst.\" }',
    TemplateData: '{ \"RECIPIENT_NAME\":\"Tad\", \"EMAIL_TITLE\":\"NAMES THE ALBUM\", \"EMAIL_SUBTITLE\":\"Enjoy!\", \"SONG_TITLE\":\"NAMES THE ALBUM IS RELEASED!\", \"SONG_LINK\":\"https://namesthealbum.com\", \"SONG_DESCRIPTION\":\"Made with LOVE by Thadeus\", \"CTA_LINK\":\"https://namesthealbum.com\", \"CTA_TEXT\":\"Listen\", \"EDIT_SUBSCRIBED_STATUS_URL\":\"https://cmdsoftware.io/marketing-api/editSubcribedStatus/229663a6-9a6d-44e5-a102-e05ee5e30f0b/1\" }',
    ReplyToAddresses: [],
    ConfigurationSetName: 'Email_Delivery_Status',
    Tags: [
      {
        Name: "BatchId",
        Value: "1djdal"
      }
    ]
  };

// Create the promise and SES service object
// var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendTemplatedEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
