/**
 * @description Entry point to the server side code
 *              
 * @author JD
 *     
 */

//The body-parser is an express middleware that parses the body and sets the body parameter on the request object
var bodyParser = require('body-parser');
var express = require('express');

//Make the express server a global variable so it can be accessed by the resources
GLOBAL.app = express();
var app = GLOBAL.app;

//Make files in the public directory accesible
app.use(express.static('public'));
app.use('/bower_components', express.static('bower_components'));


if (!process.argv[2]) {
    console.log("You must supply the bluetooth port as an argument e.g. node index.js \\\\.\\COM22");
    process.exit();
}


// parse application/json
app.use(bodyParser.json());

var instructionSetResource = require('./libs/rest/instructionSetResource');
var instructionSetExecutionResource = require('./libs/rest/instructionSetExecutionResource');

app.listen(3000, function () {
    console.log('Application is running on port 3000');
    console.log('Connected to Sphero on port ' + process.argv[2]);
});
