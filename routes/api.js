"use strict";

var _ = require('lodash');

var mongoose = require('mongoose');
var schema, Activity;
mongoose.connect("mongodb://lafay:lafay@ds047057.mongolab.com:47057/lafaydb");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("DB Connected");
    schema = mongoose.Schema({
        date: { type: Date },
        level: Number,
        exercices: [{
            name: String,
            total: Number,
            reps: [{rep : Number}]
        }]
    });
    Activity = db.model('Activity', schema);
});

// GET all activities
exports.activities = function (req, res) {
    Activity.find(function (err, activities) {
        if (err) {
            res.json(500, err);
        } else {
            res.json(200, {activities: activities});
        }
    });
};

// GET one activity
exports.activity = function (req, res) {
    var id = req.params.id;
};

// POST
exports.addActivity = function (req, res) {
    var activity = new Activity();
    _.assign(activity, req.body);
    activity.save(function (err, activity) {
        if (err) {
          res.json(500, err);
        } else {
          res.json(200, activity);
        }
    });
};

// PUT
exports.editActivity = function (req, res) {
    var id = req.params.id;
};

// DELETE
exports.deleteActivity = function (req, res) {
    var id = req.params.id;

    Activity.findById(id, function(err, activity){
        if (err) {
            res.json(500, err);
        } else {
            activity.remove(function(err, act){
                if (err) {
                    res.json(500, err);
                } else {
                    res.json(202);
                }
            });
        }
    });
};


exports.getReports = function(req, res) {

};