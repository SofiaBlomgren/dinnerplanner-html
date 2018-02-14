$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	var home = new Home($("#home"),model);
	var myDinner = new MyDinner($("#myDinner"),model);
	var selectDish = new SelectDish($("#selectDish"),model);
	var card = new Card($("#card"),model);
	var dish = new Dish($("#dish"),model);
	var overview = new Overview($("#overview"),model);
	var overviewCard = new OverviewCard($("#overviewCard"),model);
	var printout = new Printout($("#printout"),model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

	 $("#home").hide()
	 $("#myDinner").show()
	 $("#selectDish").show()
	 $("#card").show()
	 $("#dish").hide()
	 $("#overview").hide()
	 $("#overviewCard").hide()
	 $("#printout").hide()


});