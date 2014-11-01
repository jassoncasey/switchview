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

    $scope.device = {
      n_ports: 0,
      ports: []
    };

    $scope.rebuild = function() {
      var i, amt, base;
      if($scope.device.n_ports === $scope.device.ports.length) {
        return;
      } else if($scope.device.n_ports < $scope.device.ports.length) {
        // If the new count is lower, drop the tail
        $scope.device.ports.splice($scope.device.n_ports, 
                            $scope.device.ports.length-$scope.device.n_ports);
      } else {
        // otherwise just push to the end
        amt = $scope.device.n_ports - $scope.device.ports.length;
        base = $scope.device.ports.length;
        for(i=0; i<amt; ++i) {
          $scope.device.ports.push({
            port_id: base+i,
            up: true
          });
        }
      }
    }
  });
