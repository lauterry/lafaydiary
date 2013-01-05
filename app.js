/**
 * Module dependencies.
 */


var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api');

var app = module.exports = express();

// Configuration

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.engine('.html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('view options', {
        layout: false
    });

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public'));
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
app.get('/lafaydiary/lafay/api/activity/:id', api.activity);
app.post('/lafaydiary/api/activity', api.addActivity);
app.put('/lafaydiary/api/activity/:id', api.editActivity);
app.delete('/lafaydiary/api/activity/:id', api.deleteActivity);


// Start server

app.listen(37094, function(){
    console.log("Express server listening on port %d in %s mode", 37094, app.settings.env);
});