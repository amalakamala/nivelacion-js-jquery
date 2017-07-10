$(document).ready( function(){
	console.log("hola");

	$(".js-show-recipe").click(function(event) {
		console.log("js-show-recipe");
		$(".page.recipe").removeClass('make');	
	});

	$(".js-show-make").click(function(event) {
		console.log("js-show-make");
		$(".page.recipe").addClass('make');
	});

});