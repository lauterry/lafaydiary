lafayApp.controller('ViewActivitiesController', function ViewActivitiesController($scope, Activity) {
    'use strict';

    Activity.fetch().
        success(function(data) {
            $scope.activities = data.activities;
        }).
        error(function(data, status){
            alert('Error : ' + status);
        });

    $scope.deleteActivity = function(activity) {

        var activityId = activity._id;

        Activity.remove(activityId).
            success(function() {

                var activity = _.find($scope.activities, function(activity) {
                    return activity._id === activityId;
                });

                $scope.activities = _.without($scope.activities, activity);

            }).
            error(function(data, status){
                alert('Error : ' + status);
            });

    };

});
