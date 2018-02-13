$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"));
	var recipe = new Recipe($("#recipe"),model);
	var dish = new Dish($("#dish"),model);
<<<<<<< HEAD
	var card = new Card($("#card"),model);
=======
	var myDinner = new MyDinner($("#myDinner"),model);
>>>>>>> fadb851533c468cd1992861f3433d34a0c405f35

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});