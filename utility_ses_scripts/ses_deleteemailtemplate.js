// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create the promise and SES service object
var templatePromise = new AWS.SES({apiVersion: '2010-12-01'}).deleteTemplate({TemplateName: 'TEMPLATE_NAME'}).promise();

// Handle promise's fulfilled/rejected states
templatePromise.then(
  function(data) {
    console.log("Template Deleted");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });