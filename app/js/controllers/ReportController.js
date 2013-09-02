lafayApp.controller('ReportController', function ($scope, Activity){
    "use strict";

    var heightScale = d3.scale.linear().domain([0,20]).range([0, 250]);
    var colorScale = d3.scale.linear().domain([0,20]).range(["orange", "green"]);
    var axis = d3.svg.axis()
        .scale(heightScale)
        .orient('left');

    var canvas = d3.select("#report-section")
        .append("svg")
        .attr('width', 500)
        .attr('height', 250)
        .append('g')
        .attr('transform', "translate(100,0)");



    Activity.fetch().
        success(function(data) {
            $scope.activities = data.activities;
            canvas.selectAll("rect")
                .data($scope.activities[0].exercices)
                .enter()
                    .append("rect")
                    .attr('width', 50)
                    .attr('height', function(d){
                        return heightScale(d.total);
                    })
                    .attr('y', function(){
                        return 10;
                    })
                    .attr('x', function(d, i){
                        return i * 100;
                    })
                    .attr('fill', function(d){
                        return colorScale(d.total);
                    });

            canvas.append('g')
                .attr('transform', "translate(-10 , 10)")
                .call(axis);
        }).
        error(function(data, status){
            alert('Error : ' + status);
        });

});