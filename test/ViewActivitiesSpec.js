describe("...", function () {

    "use strict";

    var scope;

    var ACTIVITIES = {
        "activities": [
            {
                "date": "2013-07-05T01:53:55.311Z",
                "level": 1.1,
                "_id": "51d6274efc02bef343000002",
                "__v": 0,
                "exercices": [
                    {
                        "name": "A1",
                        "total": 12,
                        "_id": "51d6274efc02bef343000009",
                        "series": [
                            2,
                            2,
                            2,
                            2,
                            2,
                            2
                        ]
                    },
                    {
                        "name": "D",
                        "total": 18,
                        "_id": "51d6274efc02bef343000008",
                        "series": [
                            3,
                            3,
                            3,
                            3,
                            3,
                            3
                        ]
                    },
                    {
                        "name": "C1",
                        "total": 16,
                        "_id": "51d6274efc02bef343000007",
                        "series": [
                            3,
                            1,
                            2,
                            3,
                            3,
                            4
                        ]
                    },
                    {
                        "name": "E",
                        "total": 3,
                        "_id": "51d6274efc02bef343000006",
                        "series": [
                            3,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "F",
                        "total": 0,
                        "_id": "51d6274efc02bef343000005",
                        "series": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "G",
                        "total": 0,
                        "_id": "51d6274efc02bef343000004",
                        "series": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "K2",
                        "total": 0,
                        "_id": "51d6274efc02bef343000003",
                        "series": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    }
                ]
            },
            {
                "date": "2013-05-23T07:21:43.520Z",
                "level": 1.2,
                "_id": "519dc8b39cb090cb36000014",
                "__v": 0,
                "exercices": [
                    {
                        "name": "B",
                        "total": 20,
                        "_id": "519dc8b39cb090cb3600001c",
                        "series": [
                            5,
                            5,
                            5,
                            5,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "A1",
                        "total": 30,
                        "_id": "519dc8b39cb090cb3600001b",
                        "series": [
                            10,
                            10,
                            10,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "D",
                        "total": 8,
                        "_id": "519dc8b39cb090cb3600001a",
                        "series": [
                            8,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "C1",
                        "total": 24,
                        "_id": "519dc8b39cb090cb36000019",
                        "series": [
                            8,
                            8,
                            8,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "E",
                        "total": 0,
                        "_id": "519dc8b39cb090cb36000018",
                        "series": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "F",
                        "total": 0,
                        "_id": "519dc8b39cb090cb36000017",
                        "series": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "G",
                        "total": 60,
                        "_id": "519dc8b39cb090cb36000016",
                        "series": [
                            20,
                            20,
                            20,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "K2",
                        "total": 0,
                        "_id": "519dc8b39cb090cb36000015",
                        "series": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    }
                ]
            }
        ]
    };

    beforeEach(module('lafayApp'));

    beforeEach(inject(function ($controller, $httpBackend, $rootScope) {
        scope = $rootScope.$new;
        $httpBackend.whenGET('/lafaydiary/api/activities').respond(ACTIVITIES);
        $controller('ViewActivitiesController', {$scope: scope});
        $httpBackend.flush();
    }));


    it("should display Activities", inject(function () {
        expect(scope.activities).toBeTruthy();
        expect(scope.activities.length).toBe(2);

    }));

});