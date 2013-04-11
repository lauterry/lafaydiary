lafayApp.directive('onBlur', function () {
    "use strict";

    return {
        restrict : 'A',
        link : function (scope, element, attrs){

            element.bind('blur', function(){
                scope.$eval(attrs.onBlur);
            });

        }
    };
});