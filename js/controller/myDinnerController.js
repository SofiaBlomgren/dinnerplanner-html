var myDinnerController = function(view, model, app) {

    view.confirmButton.click(function(){
      app.showDinnerOverview();
    });

}