lafayApp.controller('SaveActivityController', function SaveActivityController($scope, Activity, LafayService) {
    'use strict';

    $scope.date = new Date();

    $scope.levels = LafayService.fetchAllLevels();

    // If no level is selected, display a default label
    $scope.levelLabel = "Veuillez sélectionner votre niveau";

    /**
     * Update the level and the level label given a level number
     * @param levelNumber  number of the level selected
     */
    $scope.loadLevel = function(levelNumber){
        var level = LafayService.fetchLevelContent(levelNumber);
        $scope.level = level;
        $scope.levelLabel = level.label;
    };

    $scope.saveActivity = function(){
        var activityToSave = {};
        var exercices = angular.copy($scope.level.exercices);

        /**
         * Convert series : [{rep : 1}, {rep : 1}, {rep : 1}, {rep : 1}, {rep : 1}, {rep : 1} ]
         * to series : [1,1,1,1,1,1]
         */
        _.forEach(exercices, function(exercice){
            var series = [];
            _.forEach(exercice.series, function(serie){
                series.push(serie.rep);
            });
            exercice.series = series;
        });

        activityToSave.exercices = exercices;
        activityToSave.date = $scope.date;
        activityToSave.level = $scope.level.number;

        Activity.create(activityToSave).
            success(function() {
                $scope.loadLevel($scope.level.number);
            }).
            error(function(data, status){
                alert('Error : ' + status);
            });
    };

});

lafayApp.controller('ExerciceController', function ExerciceController($scope) {
    'use strict';

    $scope.updateTotal = function(params){
        var exerciceName = params;

        var exercice = _.find($scope.level.exercices, function(exercice){
            return exercice.name === exerciceName;
        });

        var total = 0;
        angular.forEach(exercice.series, function(repetition, repKey){
            total += repetition.rep;
            $scope.$apply(function(){
                exercice.total = total;
            });

        });
    };

});


