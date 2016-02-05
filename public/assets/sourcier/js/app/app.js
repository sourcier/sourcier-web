'use strict';

// Declare app level module which depends on views, and components
angular.module('sourcierWeb', [
  'ngRoute',
  'sourcierWeb.homepage'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
