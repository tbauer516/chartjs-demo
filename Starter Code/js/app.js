'use strict'

$(function () {

	// Step 3. Create a data object
	var data = {
	    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	    datasets: [
	        {
	            label: "The First Dataset",
	            fillColor: "rgba(153,0,76,0.2)",
	            strokeColor: "rgba(153,0,76,1)",
	            pointColor: "rgba(153,0,76,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(153,0,76,1)",
	            data: [100, 34, 21, 56, 23, 90, 40]
	        },
	        {
	            label: "The Second dataset",
	            fillColor: "rgba(76,0,153,0.2)",
	            strokeColor: "rgba(76,0,153,1)",
	            pointColor: "rgba(76,0,153,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(76,0,153,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        }
	    ]
	};

	// Step 2. Get the context of the canvas element we want to select
	var ctx = document.getElementById("myChart").getContext("2d");
	var myNewChart = new Chart(ctx).Line(data, {

	    scaleShowGridLines : true,
	    scaleGridLineColor : "rgba(0,0,0,.05)",
	    scaleGridLineWidth : 1,
	    scaleShowHorizontalLines: true,
	    scaleShowVerticalLines: true,
	    bezierCurve : true,
	    bezierCurveTension : 0.4,
	    pointDot : true,
	    pointDotRadius : 4,
	    pointDotStrokeWidth : 1,
	    pointHitDetectionRadius : 20,
	    datasetStroke : true,
	    datasetStrokeWidth : 2,
	    datasetFill : true,

	});

});