lafayApp.controller('ViewActivitiesController', function ViewActivitiesController($scope, Activity) {
    'use strict';

    Activity.fetch().
        success(function(data, status, headers, config) {
            $scope.activities = data.activities;

            var tempSerie = {};
            _.forEach($scope.activities, function(activity){
                _.forEach(activity.exercices, function(exercice){
                    var series = [];
                    _.forEach(exercice.series, function(serie){
                        tempSerie.rep = serie;
                        series.push(tempSerie);
                    });
                    exercice.series = series;
                });
            });


        }).
        error(function(data, status, headers, config){
            alert('Error : ' + status);
        });

    $scope.deleteActivity = function(activity) {

        var activityId = activity._id;

        Activity.remove(activityId).
            success(function(data, status, headers, config) {
                $http.get('/lafaydiary/api/activities').
                    success(function(data, status, headers, config) {
                        $scope.activities = data.activities;
                    }).
                    error(function(data, status, headers, config){
                        alert('Error : ' + status);
                    });
            }).
            error(function(data, status, headers, config){
                alert('Error : ' + status);
            });

    };

});
