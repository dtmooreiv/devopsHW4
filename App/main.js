var express = require('express')
var fs      = require('fs')
var app = express()

var args = process.argv.slice(2);
var PORT = 8080

app.get('/', function(req, res) 
{
    res.status(200).send('Hello Blue\n');
    //If testing auto-switchover
    //res.status(500).send('something broke');
});

var server = app.listen(PORT, function () {

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)
});
