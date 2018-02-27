var CardController = function(item, dish, app) {
    
    $(item).click(function(){
        app.showDishDetails(dish.id);
    })
}