"use strict";
angular.module('directives').directive('personIdValidTwo', ['$log', function ($log) {
    $log.log("in personIdValid, directive, using two-way-binding");
    return {
        scope: {
            //two way binding
            personId: '='
        },
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('blur', function() {
                if (scope.personId) {
                    if (scope.personId.length > 12 || scope.personId.length < 12) {
                        scope.personId = 'WTF, dude????';
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