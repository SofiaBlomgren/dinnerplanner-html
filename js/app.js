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

	var sidebarViewController = new SidebarViewController(sidebarView, model, this)
	var sidebarViewController = new SidebarViewController(sidebarView, model, this)
	var sidebarViewController = new SidebarViewController(sidebarView, model, this)
	var sidebarViewController = new SidebarViewController(sidebarView, model, this)
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

	var hideAllViews = function(){
       home.hide();
       myDinner.hide();
       selectDish.hide();
       card.hide();
       dish.hide();
       overview.hide();
       overviewCard.hide();
       printout.hide();
    }

    this.showHome = function(){
        hideAllViews();
        home.show();
    }

    this.showSelectDish = function(){
        hideAllViews();
        myDinner.show();
       	selectDish.show();
       	card.show();
    }

    this.showDishDetails = function(){
        hideAllViews();
        myDinner.show();
        dish.show();
    }

    /*this.showSelectDishAgain = function(){
        hideAllViews();
        home.show();
    }*/

    this.showDinnerOverview = function(){
        hideAllViews();
        overview.show();
       	overviewCard.show();
    }

    this.showDinnerPrintout = function(){
        hideAllViews();
        printout.show();
    }



	 $("#home").hide()
	 $("#myDinner").show()
	 $("#selectDish").show()
	 $("#card").show()
	 $("#dish").hide()
	 $("#overview").hide()
	 $("#overviewCard").hide()
	 $("#printout").hide()


});