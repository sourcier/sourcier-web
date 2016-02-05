'use strict';

angular.module('sourcierWeb.homepage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'assets/sourcier/js/app/homepage/homepage.html',
    controller: 'IndexController'
  });
}])
    
.controller('IndexController', [function() {
}]);
