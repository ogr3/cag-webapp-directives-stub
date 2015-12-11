"use strict";
angular.module('directives').directive('personIdValid', ['$log', function ($log) {
    $log.log("in personIdValid, example 3, one-way binding");
    return {
        scope: {
            personId: '@personIdValidation'
        },
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('blur', function() {
                if (scope.personId) {
                    if (scope.personId.length > 12 || scope.personId.length < 12) {
                        $log.log('personId not valid');
                    } else {
                        $log.log('personId is valid');
                    }
                } else {
                    $log.log('personId missing');
                }
            });
        }
    };
}]);