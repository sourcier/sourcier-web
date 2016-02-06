'use strict';

angular.module('sourcierWeb.services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'app/services/services.html',
    controller: 'ServicesController'
  });
}])
    
.controller('ServicesController', [function() {
}]);
