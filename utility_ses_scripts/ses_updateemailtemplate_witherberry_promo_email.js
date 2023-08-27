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
readModuleFile('../email-templates-processed/greatestfeature.html', function (err, email) {
    // console.log(email);
    fileContent = email;
});

var params = {
    Template: {
      TemplateName: 'MyTemplate2', /* required */
      HtmlPart: fileContent,
      SubjectPart: 'NEW MUSIC! NAMES THE ALBUM IS RELEASED!',
      TextPart: 'Check out the album here: {{ CTA_LINK }}'
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