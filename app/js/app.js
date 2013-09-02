"use strict";

var lafayApp = angular.module('lafayApp', ['ui.bootstrap', 'ngLocale'], function ($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'partials/Welcome.html'
    });

    $routeProvider.when('/activities', {
        templateUrl: 'partials/ViewActivities',
        controller: 'ViewActivitiesController'
    });

    $routeProvider.when('/saveActivity', {
        templateUrl: 'partials/SaveActivity.html',
        controller: 'SaveActivityController'
    });

    $routeProvider.when('/reports', {
        templateUrl: 'partials/reports.html',
        controller: 'ReportController'
    });

    $routeProvider.when('/404', {
        templateUrl: 'partials/404.html'
    });
    $routeProvider.otherwise({redirectTo: '/welcome'});
});