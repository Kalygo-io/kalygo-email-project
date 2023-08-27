var AWS = require('aws-sdk');
// Set the region 
AWS.config.loadFromPath(__dirname + '/' +  './config.json');
AWS.config.update({region: 'us-east-1'});

var params = {
    Destination: {
      CcAddresses: [],
      ToAddresses: [
        // 'bounce@simulator.amazonses.com',
        'thadduval.lavud@gmail.com'
        // 'msteapot@me.com',
        // 'nduval@aol.com'
      ]
    },
    Source: 'EJP Foundation <admin@ejpfoundation.info>',
    Template: 'EJP_NEW_MENTEE',
    TemplateData: '{ \"NAME\":\"Jean-Pierre Matisse\", \"PHONE\":\"305-336-6417\" }',
    ReplyToAddresses: [],
    ConfigurationSetName: 'Email_Delivery_Status',
    Tags: [
      {
        Name: "BatchId",
        Value: "EJP"
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
