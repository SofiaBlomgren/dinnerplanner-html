// The view for the sidebar with the menu

var MyDinner = function (container, model) {

	this.hide = function(){
		container.hide()
	}

	this.show = function(){
		container.show()
	}
	
	// 
	var menuDishes = model.getFullMenu();
	var people = model.getNumberOfGuests();

	var dishes = [];
	
	menuDishes.forEach(function(dish){

		var newDiv1 = document.createElement("div");
		newDiv1.className = "row";
		newDiv1.style = "margin-bottom: 10px;";

		var newDiv2 = document.createElement("div");
		newDiv2.className = "col";
		newDiv2.style = "text-align: left;";
		var newContent = document.createTextNode(dish.name);
		newDiv2.appendChild(newContent);
		newDiv1.appendChild(newDiv2);

		var price = 0;

		dish.ingredients.forEach(function(ingredient){
			price += ingredient.price*people;
			});

		var newDiv3 = document.createElement("div");
		newDiv3.className = "col";
		newDiv3.style = "text-align: right;";
		var newContent = document.createTextNode(price + " SEK");
		newDiv3.appendChild(newContent);
		newDiv1.appendChild(newDiv3);

		dishes.push(newDiv1);

		})
	console.log(dishes);
	//
	var people = container.find("#people")
	var menudish = container.find("#menudish")
	var totalprice = container.find("#totalprice")

	people.attr("value",model.getNumberOfGuests());
	menudish.html(dishes);
	totalprice.html(model.getTotalMenuPrice());
	
}