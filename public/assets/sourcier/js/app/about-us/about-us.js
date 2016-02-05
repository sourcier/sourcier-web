'use strict';

angular.module('sourcierWeb.about-us', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about-us', {
            templateUrl: 'assets/sourcier/js/app/about-us/about-us.html',
            controller: 'AboutUsController'
        });
    }])

    .controller('AboutUsController', [function () {
    }]);
