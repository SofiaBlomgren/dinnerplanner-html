$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// Create the instance of all the views
	var home = new Home($("#home"),model);
	var myDinner = new MyDinner($("#myDinner"),model);
	var selectDish = new SelectDish($("#selectDish"),model);
	var card = new Card($("#card"),model);
	var dish = new Dish($("#dish"),model);
	var overview = new Overview($("#overview"),model);
	var overviewCard = new OverviewCard($("#overviewCard"),model);
	var printout = new Printout($("#printout"),model);

	var homeController = new HomeController(home, model, this)
	var myDinnerController = new MyDinnerController(myDinner, model, this)
	var selectDishController = new SelectDishController(selectDish, model, this)
	var cardController = new CardController(card, model, this)
	var dishController = new DishController(dish, model, this)
	var overviewController = new OverviewController(overview, model, this)
	var overviewCardController = new OverviewCardController(sidebarView, model, this)
	var printoutController = new PrintoutController(printout, model, this)

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