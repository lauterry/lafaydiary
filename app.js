/**
 * Module dependencies.
 */

"use strict";

var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api');

var app = module.exports = express();

// Configuration
app.configure(function(){
    app.set('views', __dirname + '/app');
    app.engine('.html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('view options', {
        layout: false
    });

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/app'));
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/lafaydiary/api/activities', api.activities);
app.get('/lafaydiary/api/activities/:id', api.activity);
app.post('/lafaydiary/api/activities', api.addActivity);
app.put('/lafaydiary/api/activities/:id', api.editActivity);
app.delete('/lafaydiary/api/activities/:id', api.deleteActivity);


// Start server
var port  = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});