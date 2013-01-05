lafayApp.controller('ViewActivitiesController', function ViewActivitiesController($scope, $http) {
    'use strict';

    $http.get('/lafaydiary/api/activities').
        success(function(data, status, headers, config) {
            $scope.activities = data.activities;
        }).
        error(function(data, status, headers, config){
            alert('Error : ' + status);
        });

    $scope.deleteActivity = function(activity) {

        var activityId = activity._id;

        $http.delete('/lafaydiary/api/activity/' + activityId).
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

    }

});
