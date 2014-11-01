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
      link: function postLink(scope, element, attrs) {
        element.text('this is the switchview directive');
      }
    };
  });
