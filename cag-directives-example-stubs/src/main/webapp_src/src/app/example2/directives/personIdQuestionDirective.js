'use strict';
angular.module('directives').directive('personId', [function () {

    console.log("In the directive's factory method");

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'example2/directives/personId.tpl.html'
    };

}]);
