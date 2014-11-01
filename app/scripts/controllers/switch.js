'use strict';

/**
 * @ngdoc function
 * @name switchviewApp.controller:SwitchCtrl
 * @description
 * # SwitchCtrl
 * Controller of the switchviewApp
 */
angular.module('switchviewApp')
  .controller('SwitchCtrl', function ($scope) {

    $scope.n_ports = 24;

    $scope.ports = _.map(_.range($scope.n_ports), function(port) {
      return {
        port_id: port,
        up: true
      };
    });

    $scope.rebuild = function() {
      var i, amt;
      if($scope.n_ports < $scope.ports.length) {
        // If the new count is lower, drop the tail
        $scope.ports.splice($scope.n_ports, $scope.ports.length-$scope.n_ports);
      } else {
        // otherwise just push to the end
        amt = $scope.n_ports + $scope.ports.length;
        for(i=$scope.ports.length; i<amt; ++i) {
          $scope.ports.push({
            port_id: i,
            up: true
          });
        }
      }
    }
  });
