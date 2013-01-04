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
    if (id >= 0 && id < data.length) {
        res.json({
            post: data[id]
        });
    } else {
        res.json(false);
    }
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

    if (id >= 0 && id < data.length) {
        data[id] = req.body;
        res.json(true);
    } else {
        res.json(false);
    }
};

// DELETE

exports.deleteActivity = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.length) {
        data.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
};