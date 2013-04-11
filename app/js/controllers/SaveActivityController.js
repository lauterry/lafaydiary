lafayApp.controller('SaveActivityController', function SaveActivityController($scope, $http, LafayService) {
    'use strict';

    $scope.levels = LafayService.fetchAllLevels();

    $scope.levelLabel = "Veuillez sélectionner votre niveau";

    $scope.loadLevel = function(levelNumber){
        var level = _.find($scope.levels, function(level) {
            return level.number === levelNumber;
        });
        $scope.level = level;
        $scope.levelLabel = level.label;
    };

    $scope.saveActivity = function(){
        var activityToSave = {};
        activityToSave.exercices = $scope.level.exercices;
        activityToSave.date = $scope.date;
        activityToSave.level = $scope.level.number;

        $http.post('/lafaydiary/api/activity', activityToSave).
            success(function(data, status, headers, config) {
                alert('Success : ' + data);
            }).
            error(function(data, status, headers, config){
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
        angular.forEach(exercice.reps, function(repetition, repKey){
            total += repetition.rep;
            $scope.$apply(function(){
                exercice.total = total;
            });

        });
    };

});


