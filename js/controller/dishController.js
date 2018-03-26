var DishController = function(view, model, app) {
    
	view.backtosearchButton.click(function(){
    	app.showSelectDish();
    });

    view.addtomenuButton.click(function(){
    	model.addDishToMenu(view.id);
    	console.log(view.id);
    });
    //vid knapptryck:
    //view.hide()
}