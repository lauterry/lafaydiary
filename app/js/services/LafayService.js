lafayApp.factory('LafayService', function () {
    'use strict';

    var levels = [
        {
            number : 1.1,
            label : "Niveau 1 Programme 1",
            exercices : [
                {name : "A1", series : [0, 1, 2, 3, 4, 5], "total" : 0},
                {name : "D", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "C1", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "E", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "F", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "G", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "K2", series : [0, 0, 0, 0, 0, 0], "total" : 0}
            ]
        },
        {
            number : 1.2,
            label : "Niveau 1 Programme 2",
            exercices : [
                {name : "B", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "A1", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "D", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "C1", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "E", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "F", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "G", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "K2", series : [0, 0, 0, 0, 0, 0], "total" : 0}
            ]
        },
        {
            number : 2,
            label : "Niveau 2",
            exercices : [
                {name : "B1", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "A3", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "A2", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "C1", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "E", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "F", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "G", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "H", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "K2", series : [0, 0, 0, 0, 0, 0], "total" : 0}
            ]
        },
        {
            number : 3,
            label : "Niveau 3",
            exercices : [
                {name : "B2", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "A3", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "A2", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "C2", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "E3", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "F", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "G", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "H", series : [0, 0, 0, 0, 0, 0], "total" : 0},
                {name : "K2", series : [0, 0, 0, 0, 0, 0], "total" : 0}
            ]
        }
    ];

    return {
        /**
         * fetch all levels
         * @returns {Array}
         */
        fetchAllLevels : function() {
           return  levels;
        },
        /**
         * fetch exercices given a level number
         * @param levelNumber
         * @returns {Mixed}
         */
        fetchLevelContent: function (levelNumber) {
            return _.find(levels, function (level) {
                return level.number === levelNumber;
            });
        }
    };
});
