// View of the home page

var Home = function (container, model) {

	this.hide = function(){
		container.hide()
	}

	this.show = function(){
		container.show()
	}

	this.homeButton = container.find("#homeButton");

}