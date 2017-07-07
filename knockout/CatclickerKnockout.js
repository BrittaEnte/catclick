
// here we store the dates of the different ducks
var initialduck = [
	
		{
		count: 0,
		name: "tabby",
		img: "ente.jpg",
		nickname: ["bla", "blubb"]
		},
		{
		count: 0,
		name: "fluffy",
		img: "ente1.png",
		nickname: ["wuff", "blubb"]
		},
		{
		count: 0,
		name: "blubby",
		img: "ente2.jpg",
		nickname: ["diff", "blubb"]
		},
		{
		count: 0,
		name: "duffy",
		img: "ente3.jpg",
		nickname: ["miau", "blubb"]
		}
	]	




// here we connect the data with the view. we choose knockout js to bind all datas
var Duck = function(data){
	this.clickCount = ko.observable(data.count);
	this.name = ko.observable(data.name);
	this.imgSrc= ko.observable(data.img);
	this.nickname= ko.observableArray(data.nickname);
	

	
	this.levels = ko.computed(function(){
		//var levels

		if (this.clickCount() < 10){
			levels = "infant";	

		} else {
			levels = "master";			
		}
		

		return levels;
		}, this);
	
}


// here we choose the duck clicked on 
var ViewModel = function(){

	var self = this;

	this.ducklist = ko.observableArray([]);

	initialduck.forEach(function(duckItem) {
		// body...
		self.ducklist.push(new Duck(duckItem));
	});
	

	this.currentDuck = ko.observable(this.ducklist()[0]);

	

	// increment counter 
	this.incrementCounter = function(){
		this.clickCount(this.clickCount()+1); 

	};

	this.setDuck = function(clickedDuck){
		self.currentDuck(clickedDuck);

	}; 
};


ko.applyBindings(new ViewModel()); 



