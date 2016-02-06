'use strict';

angular.module('sourcierWeb.homepage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/homepage/homepage.html',
    controller: 'IndexController'
  });
}])
    
.controller('IndexController', [function() {
}]);
