lafayApp.service('Activity', function($http){
    "use strict";

    var API_URL = "/lafaydiary/api/activities";

    return {

        fetch : function(){
            return $http.get(API_URL);
        },
        /**
         * create a new activity
         * @param activity
         * {
         *      level : Number,
         *      date : Date,
         *      excercices : [{
         *          name : String,
         *          total : Number,
         *          series : [Number]
         *      }]
         * }
         *
         * @returns {*|HttpPromise}
         */
        create : function(activity){
            return $http.post(API_URL, activity);
        },
        remove : function(id){
            return $http.delete(API_URL + '/' + id);
        }
    }

});