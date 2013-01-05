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
                var deletedActivity = _.find($scope.activities, function(activity){
                    return activity.id === activityId;
                });

                $scope.activities.splice($scope.activities.indexOf(deletedActivity));
            }).
            error(function(data, status, headers, config){
                alert('Error : ' + status);
            });

    }

});
