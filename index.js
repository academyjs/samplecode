/**
 * @description Entry point to the server side code
 *              
 * @author JD
 *     
 */

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Application is running on port 3000');
});