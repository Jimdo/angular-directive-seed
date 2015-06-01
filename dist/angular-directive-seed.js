/*!
 * angular-directive-seed v0.0.0
 * https://github.com/Jimdo/angular-directive-seed
 *
 * A starting point for angular directives.
 *
 * Copyright 2015, Jimdo GmbH
 * Released under the MIT license
 */
(function(angular, undefined) {
  'use strict';

  // src/js/helper.module.js
  var myModule = angular.module('angularDirectiveSeed', []);

  // src/js/directive.directive.js
  myModule.directive('myDirective', function() {
    'use strict';

    return {
      templateUrl: 'directive.html',
      controller: ['$scope', function($scope) {
        $scope.foo = 'bar';
      }]
    };
  });

  // /node_modules/grunt-angular-toolbox/.tmp/ng_templates.js
  angular.module('angularDirectiveSeed').run(['$templateCache', function($templateCache) {
    'use strict';

    $templateCache.put('directive.html',
      "<div><h1>My Directive</h1><h2>{{foo}}</h2></div>"
    );

  }]);
})(window.angular);
