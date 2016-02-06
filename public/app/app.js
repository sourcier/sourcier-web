'use strict';

// Declare app level module which depends on views, and components
angular.module('sourcierWeb', [
    'ngRoute',
    'sourcierWeb.homepage',
    'sourcierWeb.about-us',
    'sourcierWeb.services',
    'sourcierWeb.testimonials',
]).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]).run(function ($rootScope) {
    $rootScope.currentDate = new Date();
});
