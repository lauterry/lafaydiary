var lafayApp = angular.module('lafayApp', [], function ($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'views/Welcome.html'
    });
    $routeProvider.when('/saveActivity', {
        templateUrl: 'views/SaveActivity.html',
        controller: 'ActivityController'
    });

    $routeProvider.when('/404', {
        templateUrl: 'views/404.html'
    });
    $routeProvider.otherwise({redirectTo: '/404'});
});