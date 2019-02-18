var DishController = function(view, model, app) {
    
	view.backtosearchButton.click(function(){
    	app.showSelectDish();
    });

	//denna lägger på något vis till alla tidigare valda dishes för varje ny dish
    view.addtomenuButton.click(function(){
    	model.addDishToMenu(view.id);
    	console.log(view.id);
    });
    //vid knapptryck:
    //view.hide()
}