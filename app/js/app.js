'use strict';


// Declare app level module which depends on filters, and services
angular.module('frontApp', [
  'ngRoute',
  'frontApp.filters',
  'frontApp.services',
  'frontApp.directives',
  'frontApp.controllers',
  'restangular',
  'directive.g+signin',
  'ui.bootstrap'
]).
config(['$routeProvider', 'RestangularProvider', 
  function($routeProvider, RestangularProvider) {

  RestangularProvider.setBaseUrl('http://www.global.com');
  RestangularProvider.setRequestSuffix('.json');

  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});

  // Home
  $routeProvider.when(
    '/home', 
    {
      templateUrl: 'views/home/index.html'
    }
  );

  // Videos
  $routeProvider.when(
    '/videos', 
    { 
      templateUrl: 'views/videos/index.html'
    }
  );

  $routeProvider.when(
    '/videos/edit/:id',
    {
      templateUrl: 'views/videos/edit.html'
    }
  );

  $routeProvider.when(
    '/videos/show/:id',
    {
      templateUrl: 'views/videos/show.html'
    }
  );

  // Users
  $routeProvider.when(
    '/users/login',
    {
      templateUrl: 'views/users/login.html'
    }
  );

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
