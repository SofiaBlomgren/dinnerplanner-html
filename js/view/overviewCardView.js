// Creates the cards on the dinner overview page

var OverviewCard = function (container, model) {

	this.hide = function(){
		container.hide()
	}

	this.show = function(){
		container.show()
	}
	
	// Stores the cards
	var cardContainer = [];

	// Creates the html structure for the cards
	var createCard = model.getFullMenu().forEach(function(dish){

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

			})

	//
	var selectedDishes = container.find("#selectedDishes");
	selectedDishes.html(cardContainer);
	
}