var MyDinner = function (container, model) {
	
	/**
	 * We use the @method find() on @var {jQuery object} container to look for various elements 
	 * inside the view in orther to use them later on. For instance:
	
	<div class="row">
            <div class="col" style="text-align: left;">
              <span id='dishName'></span>
            </div>
            <div class="col" style="text-align: right;">
              <span id='price'></span> SEK
            </div>
    </div>
	 */
	
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

	var people = container.find("#people")
	var dish = container.find("#dish")
	//var dishName = container.find("#dishName");
	//var price = container.find("#price");

	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */
	//dishName.html(currentDish.name);
	people.attr("value",model.getNumberOfGuests());
	dish.html(dishes);
	//price.html(dishprice);
	
}