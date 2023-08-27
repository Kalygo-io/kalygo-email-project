var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.loadFromPath( __dirname + '/' + './config.json');
AWS.config.update({region: 'us-east-1'});

function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        // fs.readFile(filename, 'utf8', callback);
        var fileContent = fs.readFileSync(filename, 'utf8');
        callback(null, fileContent);
    } catch (e) {
        callback(e);
    }
}

var fileContent;
readModuleFile('../email-templates-processed/greatestfeature_cmd_generic_email.html', function (err, email) {
    // console.log(email);
    fileContent = email;
});

var params = {
    Template: {
      TemplateName: 'CMD_GENERIC_EMAIL', /* required */
      HtmlPart: fileContent,
      SubjectPart: '{{ SUBJECT }}',
      TextPart: '{{ MESSAGE_AS_TEXT }}'
    }
};

var templatePromise = new AWS.SES({apiVersion: '2010-12-01'}).updateTemplate(params).promise();

templatePromise.then(
  function(data) {
    console.log("Template Updated");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });