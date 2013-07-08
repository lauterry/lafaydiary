lafayApp.controller('ReportController', function ($scope, Activity){
    "use strict";

    Activity.fetch().
        success(function(data) {
            $scope.activities = data.activities;

            _.forEach($scope.activities, function(activity){
                _.forEach(activity.exercices, function(exercice){
                    var series = [];
                    _.forEach(exercice.series, function(serie){
                        var tempSerie = {};
                        tempSerie.rep = serie;
                        series.push(tempSerie);
                    });
                    exercice.series = series;
                });
            });
        }).
        error(function(data, status){
            alert('Error : ' + status);
        });

});