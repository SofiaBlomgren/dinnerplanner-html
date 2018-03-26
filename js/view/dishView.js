//View of the recipe of a dish

var Dish = function (container, model, id) {

	this.hide = function(){
		container.hide()
	}

	this.show = function(){
		container.show()
	}
	
	var currentDish = model.getDish(id);
	this.id = id
	var people = model.getNumberOfGuests();

	//Stores the rows of ingredients created in ingredientsCard
	var ingredients = [];

	//Makes a row for each ingredient with information about it
	var ingredientsCard = currentDish.ingredients.forEach(function(ingredient){

			var newDiv1 = document.createElement("div");
			newDiv1.className = "row";

			var newDiv2 = document.createElement("div");
			newDiv2.className = "col-3";
			var newContent = document.createTextNode(ingredient.quantity*people + " " + ingredient.unit);
			newDiv2.appendChild(newContent);
			newDiv1.appendChild(newDiv2);

			var newDiv3 = document.createElement("div");
			newDiv3.className = "col-5";
			var newContent = document.createTextNode(ingredient.name);
			newDiv3.appendChild(newContent);
			newDiv1.appendChild(newDiv3);

			var newDiv4 = document.createElement("div");
			newDiv4.className = "col-2";
			var newContent = document.createTextNode("SEK");
			newDiv4.appendChild(newContent);
			newDiv1.appendChild(newDiv4);

			var newDiv5 = document.createElement("div");
			newDiv5.className = "col-2";
			var newContent = document.createTextNode(ingredient.price*people);
			newDiv5.appendChild(newContent);
			newDiv1.appendChild(newDiv5);

			
			ingredients.push(newDiv1);

			})

	this.backtosearchButton = container.find("#backtosearch");
	this.addtomenuButton = container.find("#addtomenu");


	//Stores the total price of all ingredients of the dish
	var totalprice = 0;
	
	currentDish.ingredients.forEach(function(ingredient){
		totalprice += ingredient.price*people;
		})


	var dishName = container.find("#dishName");
	var dishImg = container.find("#dishImg");
	var dishDescription = container.find("#dishDescription");
	var numberOfGuests = container.find("#numberOfGuests");
	var allIngredients = container.find("#allIngredients");
	var price = container.find("#price");


	dishName.html(currentDish.name);
	dishImg.attr("src","images/"+currentDish.image);
	dishDescription.html(currentDish.description);
	numberOfGuests.html(model.getNumberOfGuests());
	allIngredients.html(ingredients);
	price.html(totalprice);
	
}