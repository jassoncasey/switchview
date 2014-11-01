'use strict';

/**
 * @ngdoc directive
 * @name switchviewApp.directive:switchview
 * @description
 * # switchview
 */
angular.module('switchviewApp')
  .directive('switchView', function () {
    return {
      templateUrl: 'views/switchView.html',
      restrict: 'E',
      scope: {
        device: '='
      },
      controller: function($scope) {
        $scope.$watch('device', function() {
          console.log('device changed');
        }, true);
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
