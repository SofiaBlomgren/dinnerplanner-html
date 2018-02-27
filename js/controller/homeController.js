var HomeController = function(view, model, app) {

    view.selectDish.on('click', function(){
        app.showSelectDish();
    });

}