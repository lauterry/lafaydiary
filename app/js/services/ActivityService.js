lafayApp.service('Activity', function($http){
    "use strict";

    var API_URL = "/lafaydiary/api/activities";

    return {

        fetch : function(){
            return $http.get(API_URL);
        },
        create : function(activity){
            return $http.post(API_URL, activity);
        },
        remove : function(id){
            return $http.delete(API_URL + '/' + id);
        }
    }

});