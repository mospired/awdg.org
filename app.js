var express = require('express'),
    app = express();

app.keystone = require('client');

//...do your normal express setup stuff, add middleware and routes (but not static content or error handling middleware yet)

app.keystone.mount('/cms', app, function() {
    //put your app's static content and error handling middleware here and start your server
});