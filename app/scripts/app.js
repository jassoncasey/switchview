'use strict';

/**
 * @ngdoc overview
 * @name switchviewApp
 * @description
 * # switchviewApp
 *
 * Main module of the application.
 */
angular
  .module('switchviewApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/switch', {
        templateUrl: 'views/switch.html',
        controller: 'SwitchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
