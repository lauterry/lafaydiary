lafayApp.factory('LafayService', function () {
    'use strict';

    var levels = [
        {
            number : 1.1,
            label : "Niveau 1 Programme 1",
            exercices : [
                {name : "A1", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "D", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "C1", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "E", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "F", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "G", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "K2", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0}
            ]
        },
        {
            number : 1.2,
            label : "Niveau 1 Programme 2",
            exercices : [
                {name : "B", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "A1", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "D", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "C1", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "E", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "F", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "G", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "K2", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0}
            ]
        },
        {
            number : 2,
            label : "Niveau 2",
            exercices : [
                {name : "B1", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "A3", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "A2", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "C1", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "E", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "F", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "G", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "H", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "K2", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0}
            ]
        },
        {
            number : 3,
            label : "Niveau 3",
            exercices : [
                {name : "B2", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "A3", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "A2", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "C2", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "E3", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "F", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "G", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "H", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0},
                {name : "K2", series : [{rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}, {rep:0}], "total" : 0}
            ]
        }
    ];

    return {
        fetchAllLevels : function() {
           return  levels;
        },
        fetchLevelContent: function (levelNumber) {

            return _.find(levels, function (level) {
                return level.number === levelNumber;
            });
        }
    };
});
