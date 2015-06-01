/* global myModule */
myModule.directive('myDirective', function() {
  'use strict';

  return {
    templateUrl: 'directive.html',
    controller: function($scope) {
      $scope.foo = 'bar';
    }
  };
});
