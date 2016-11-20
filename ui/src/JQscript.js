$(document).ready(function() {
	console.log("FUCKKKKK" + "jnejfefnefnefneifneifneifneifei")
	$("#searchButton").on("click", function() {
		var platform = document.getElementbyId("#platform").state("value");
		var format = $("#format").state("value");
		var location = $("#location").attr("defaultValue");

		alert(platform);


	});
});