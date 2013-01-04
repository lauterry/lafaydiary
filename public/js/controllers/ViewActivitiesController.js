lafayApp.controller('ViewActivitiesController', function ViewActivitiesController($scope, $http) {
    'use strict';

    $http.get('/lafaydiary/api/activities').
        success(function(data, status, headers, config) {
            $scope.activities = data.activities;
        }).
        error(function(data, status, headers, config){
            alert('Error : ' + status);
        });

});
