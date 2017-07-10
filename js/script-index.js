$(document).ready( function(){
	/*ETAPA 1
	Hide según corresponda
	*/
	$("#js-back-index").hide();
	$("#js-menu-recipe").hide();

	/*ETAPA 2
	Hide según corresponda
	*/
	$(".callout-news").append(printNews());


	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);

});

/* function Etapa 2*/
function printNews(){
	$("p").text('NUEVAS RECETAS');
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(e){
		if (e.highlighted == true){
			//console.log(e);
			renderRecipe(e);
		}
	})
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	//console.log('Voy a pintar la receta: ', recipe);
	$(".list-recipes").append(`
		<a class="item-recipe" href="#">
  			<span class="attribution">
  			 	<span class="title-recipe">`+ recipe.title+`</span>
    			<span class="metadata-recipe">
    				<span class="author-recipe">`+ recipe.source.name +`</span>
     				<span class="bookmarks-recipe">
     					<span class="icon-bookmark"></span> 
      				</span>
    			</span>
  			</span>

  			<img src="img/recipes/320x350/`+ recipe.name +`.jpg" />
		</a>
		`)
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	activitiesArray.forEach(function(e){
		renderActivity(e);
	})
	if(activitiesArray.length > 0){
		$(".wrapper-message").hide();
	}
}


/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe){
	$(".list-activities").append(`
		<a href="#" class="item-activity">
			<span class="attribution">
		  		<span class="avatar">
		    		<img src="` + recipe.userAvatar + `" class="image-avatar">
		    	</span> 
		   		<span class="meta">
		      		<span class="author">` + recipe.userName + `</span>
		     		<span class="recipe">` + recipe.recipeName + `</span>` + recipe.text + `
		      		<span class="location">` + recipe.place + `</span>
		    	</span>
			</span>
			<div class="bg-image" style="background-image: url('`+ recipe.image + `');"></div>
		</a>
	`);
}


