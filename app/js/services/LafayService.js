lafayApp.factory('LafayService', function () {
    'use strict';

    var levels = [
        {
            number : 1.1,
            label : "Niveau 1 Programme 1",
            exercices : [
                {name : "A1", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "D", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "C1", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "E", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "F", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "G", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "K2", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0}
            ]
        },
        {
            number : 1.2,
            label : "Niveau 1 Programme 2",
            exercices : [
                {name : "B", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "A1", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "D", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "C1", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "E", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "F", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "G", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "K2", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0}
            ]
        },
        {
            number : 2,
            label : "Niveau 2",
            exercices : [
                {name : "B1", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "A3", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "A2", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "C1", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "E", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "F", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "G", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "H", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "K2", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0}
            ]
        },
        {
            number : 3,
            label : "Niveau 3",
            exercices : [
                {name : "B2", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "A3", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "A2", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "C2", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "E3", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "F", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "G", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "H", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "K2", reps : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0}
            ]
        }
    ];

    return {
        fetchAllLevels : function() {
           return  levels;
        },
        fetchLevelContent: function (levelNumber) {

            var level = _.find(levels, function(level){
                return level.number === levelNumber;
            });
            return level;
        }
    };
});
