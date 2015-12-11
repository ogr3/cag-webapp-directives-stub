"use strict";
angular.module('directives').directive('personIdSeven', function() {

    return {
        scope: true,
        restrict: 'E',
        replace: 'true',
        require: ['^personalInfo'],
        templateUrl: 'example7/directives/personId.tpl.html',
        link: function(scope, elem, attrs, controller) {
            scope.logMessage = 'personName ready for input.';
            controller[0].logInput(scope.logMessage);
        }
    };

});