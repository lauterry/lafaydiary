lafayApp.controller('NavBarController', function NavBarController($scope, $location) {
    'use strict';

    $scope.routeIs = function(routeName) {
        return $location.path() === routeName;
    };

});
