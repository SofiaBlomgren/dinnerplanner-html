// Main view of the dinner overview page

var Overview = function (container, model) {

	this.hide = function(){
		container.hide()
	}

	this.show = function(){
		container.show()
	}
	
	// Gets the number of guests
	var people = model.getNumberOfGuests();

	// Calculates the price of each dish on the menu
	var htmlString = "<h1>";
	var TotalDishPrice = model.getFullMenu();
	TotalDishPrice.forEach(function(dish){

		var dishPrice = 0
		dish.ingredients.forEach(function(ingredient){
			dishPrice += ingredient.price*people;
		});

		htmlString +=  dishPrice + " ";

	});
	htmlString += "</h1>"

	//
	var numberOfGuests = container.find("#numberOfGuests");
	var dishPrice = container.find("#dishPrice");

	//
	numberOfGuests.html(model.getNumberOfGuests());
	dishPrice.html(htmlString);
	
}
 
