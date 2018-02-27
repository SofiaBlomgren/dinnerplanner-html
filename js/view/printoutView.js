var Printout = function (container, model) {

	this.hide = function(){
		container.hide()
	}

	this.show = function(){
		container.show()
	}


	var dishes = model.getFullMenu();

	//Stores the dishPrintout information of each dish
	var printout = [];

	var dishPrintout = dishes.forEach(function(dish){

			var newDiv1 = document.createElement("div");
			newDiv1.className = "row";
			newDiv1.style = "margin-bottom: 20px;"

			var newDiv2 = document.createElement("div");
			newDiv2.className = "col-3";
			newDiv2.style = "text-align: left;";
			newDiv1.appendChild(newDiv2);

			var newImg1 = document.createElement("img");
			newImg1.style = "width: 90%;";
			newImg1.src = "images/"+dish.image;
			newDiv2.appendChild(newImg1);

			var newDiv3 = document.createElement("div");
			newDiv3.className = "col-4";
			newDiv3.style = "text-align: left;";
			newDiv1.appendChild(newDiv3);

			var newh2 = document.createElement("h2");
			var newContent = document.createTextNode(dish.name);
			newh2.appendChild(newContent);
			newDiv3.appendChild(newh2);

			var newp1 = document.createElement("p");
			var newContent = document.createTextNode(dish.description);
			newp1.appendChild(newContent);
			newDiv3.appendChild(newp1);

			var newDiv4 = document.createElement("div");
			newDiv4.className = "col-5";
			newDiv4.style = "text-align: left;";
			newDiv1.appendChild(newDiv4);

			var newh5 = document.createElement("h4");
			var newContent = document.createTextNode("Preparation");
			newh5.appendChild(newContent);
			newDiv4.appendChild(newh5);

			var newp2 = document.createElement("p");
			var newContent = document.createTextNode(dish.description);
			newp2.appendChild(newContent);
			newDiv4.appendChild(newp2);

			
			printout.push(newDiv1);

			})


	var people = container.find("#people");
	var dinnerPrintout = container.find("#dinnerPrintout");

	dinnerPrintout.html(printout);
	people.html(model.getNumberOfGuests());
	
}