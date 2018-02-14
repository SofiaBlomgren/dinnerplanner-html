var Printout = function (container, model) {
	/*
    <div class="row">
      <div class="col-2" style="text-align: left;">
        <img style="width: 80%;" src="images/bakedbrie.jpg"/>
      </div>
      <div class="col-4" style="text-align: left;">
        <h2>Baked brie</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
      </div>
      <div class="col">
        <h5>Preparation</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
        </p>
      </div>
    </div>
	*/
	console.log(model.getFullMenu());
	var dishes = model.getFullMenu();
	var people = model.getNumberOfGuests();

	var printout = [];

	var dishPrintout = dishes.forEach(function(dish){

			var newDiv1 = document.createElement("div");
			newDiv1.className = "row";

			var newDiv2 = document.createElement("div");
			newDiv2.className = "col-2";
			newDiv2.style = "text-align: left;";
			newDiv1.appendChild(newDiv2);

			var newImg1 = document.createElement("img");
			newImg1.style = "width: 80%;";
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
			newDiv4.className = "col-4";
			newDiv4.style = "text-align: left;";
			newDiv1.appendChild(newDiv4);

			var newh5 = document.createElement("h2");
			var newContent = document.createTextNode("Preparation");
			newh5.appendChild(newContent);
			newDiv3.appendChild(newh5);

			var newp2 = document.createElement("p");
			var newContent = document.createTextNode(dish.description);
			newp2.appendChild(newContent);
			newDiv3.appendChild(newp2);

			
			printout.push(newDiv1);

			})





	var dinnerPrintout = container.find("#dinnerPrintout");



	dinnerPrintout.html(printout);
	
}