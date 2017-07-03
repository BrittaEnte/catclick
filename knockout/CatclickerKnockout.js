var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("ente");
	this.imgSrc= ko.observable("ente.jpg");
	

	this.incrementCounter = function(){
		this.clickCount(this.clickCount()+1); 

	}

	
	this.levels = ko.computed(function(){
		var levels;
		if (clickCount < 10){
			levels = "infant";			
		} else {
			levels = "master";			
		}
		return levels;
		}, this);
	}; 


return levels
ko.applyBindings(new ViewModel()); 



