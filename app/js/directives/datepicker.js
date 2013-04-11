"use strict";

lafayApp.directive('datePicker', function () {
    return {
        restrict : 'E',
        template: '<input type="text" class="datepicker" ng-model="date">',
        replace : true,
        link : function (scope, element){
            var today = new Date();

            scope.date = today.toLocaleDateString();

            element.datepicker({
                format : 'dd/m/yyyy',
                todayHighlight : true
            }).on('changeDate', function(ev){
                scope.$apply(function(){
                    scope.date = ev.date.toLocaleDateString();
                });
            });
        }
    };
});
