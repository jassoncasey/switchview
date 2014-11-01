'use strict';

/**
 * @ngdoc function
 * @name switchviewApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the switchviewApp
 */
angular.module('switchviewApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
