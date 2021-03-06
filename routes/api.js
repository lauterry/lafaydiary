"use strict";

var _ = require('lodash');

var mongoose = require('mongoose');

var schema, Activity, db;

mongoose.connect("mongodb://lafay:lafay@ds047057.mongolab.com:47057/lafaydb");

db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
    console.log("** DB Connected");

    var schema = mongoose.Schema({
        date: {type: Date},
        level: {type: Number},
        exercices: [
            {
                name: String,
                total: { type: Number},
                series: [Number]
            }
        ]
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

exports.activity = function (req, res) {
    var id = req.params.id;


    Activity.findById(id, function (err, activity) {
        if (err) {
            res.json(500, err);
        } else {
            res.json(200, {activity: activity});
        }
    });
};

// POST
exports.addActivity = function (req, res) {

    console.log('** POST ACTIVITY : ' + JSON.stringify(req.body));

    var activity = new Activity(req.body);

    activity.save(function (err, activity) {
        if (err) {
            console.log(err);
            res.json(500, err);
        } else {
            res.json(201, activity);
        }
    });
};

// PUT
exports.editActivity = function (req, res) {
    var id = req.params.id;

    Activity.update({id: id}, req.body, {}, function (err, activity) {
        if (err) {
            res.json(304, err);
        } else {
            res.json(200, activity);
        }
    });
};

// DELETE
exports.deleteActivity = function (req, res) {
    var id = req.params.id;

    Activity.findById(id, function (err, activity) {
        if (err) {
            res.json(500, err);
        } else {
            activity.remove(function (err, act) {
                if (err) {
                    res.json(500, err);
                } else {
                    res.json(202);
                }
            });
        }
    });
};