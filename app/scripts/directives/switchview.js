'use strict';

/**
 * @ngdoc directive
 * @name switchviewApp.directive:switchview
 * @description
 * # switchview
 */
angular.module('switchviewApp')
  .directive('switchView', function (portsView) {
    return {
      templateUrl: 'views/switchView.html',
      restrict: 'E',
      scope: {
        device: '='
      },
      controller: function($scope) {
        $scope.ports = portsView($scope.device.ports, 24);

        $scope.isColorA = function(i, j) {
          return j % 2 == 0 && i % 2 == 0 || j % 2 != 0 && i % 2 != 0;
        };
        $scope.isColorB = function(i, j) {
          return j % 2 == 0 && i % 2 != 0 || j % 2 != 0 && i % 2 == 0;
        };

        $scope.$watch('device', function() {
          $scope.ports = portsView($scope.device.ports, 24);
        }, true);
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
