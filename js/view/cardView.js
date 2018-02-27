//View of cards that contain the name and image of a dish

var Card = function (container, model, app) {

	this.hide = function(){
		container.hide()
	}

	this.show = function(){
		container.show()
	}

	//Stores the cards created in createCard
	var cardContainer = [];

	//For every dish it creates the html structure of a card and populates it with data about the dish
	var createCard = model.getAllDishes().forEach(function(dish){

			var newDiv1 = document.createElement("div");
			newDiv1.className = "card";

			var newImg = document.createElement("img");
			newImg.className = "card-img-top";
			newImg.src = "images/"+dish.image;
			newImg.alt = "Card image cap"
			newDiv1.appendChild(newImg);

			var newDiv2 = document.createElement("div");
			newDiv2.className = "card-block";
			newDiv1.appendChild(newDiv2);

			var newH4 = document.createElement("h4");
			newH4.className = "card-title";
			var newContent = document.createTextNode(dish.name);
			newH4.appendChild(newContent);
			newDiv2.appendChild(newH4);
			
			cardContainer.push(newDiv1);

			new CardController(newDiv1, dish, app);

			})


	var allDishes = container.find("#allDishes");
	allDishes.html(cardContainer);

	this.cardButton = container.find(".card");

	
}