'use strict';

angular.module('sourcierWeb.testimonials', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/testimonials', {
    templateUrl: 'app/testimonials/testimonials.html',
    controller: 'TestimonialsController'
  });
}])
    
.controller('TestimonialsController', [function() {
}]);
