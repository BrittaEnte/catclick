var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("ente");
	this.imgSrc= ko.observable("ente.jpg");

	this.incrementCounter = function(){
		this.clickCount(this.clickCount()+1); 


	};

}


ko.applyBindings(new ViewModel()); 



