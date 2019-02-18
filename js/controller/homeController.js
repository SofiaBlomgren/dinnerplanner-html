var HomeController = function(view, model, app) {

	//denna funkar inte? endast den i app.js?
    view.selectDish.on('click', function(){
        app.showSelectDish();
    });

}