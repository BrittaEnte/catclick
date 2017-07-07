
// here we store the dates of the different ducks
var duckmodel = function(){

	ducks: [
		{
		count: 0,
		name: 1,
		img: "ente.jpg",
		nickname: ["bla", "blubb"]
		},
		{
		count: 0,
		name: 2,
		img: "ente1.png",
		nickname: ["bla", "blubb"]
		},
		{
		count: 0,
		name: 3,
		img: "ente2.jpg",
		nickname: ["bla", "blubb"]
		},
		{
		count: 0,
		name: 4,
		img: "ente3.jpg",
		nickname: ["bla", "blubb"]
		}
	]	
};



// here we connect the data with the view. we choose knockout js to bind all datas
var Duck = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("ente");
	this.imgSrc= ko.observable("ente.jpg");
	this.nickname= ko.observableArray(["bla", "blubb"]);
	

	
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
	this.currentDuck = ko.observable(new Duck());

	// increment counter 
	this.incrementCounter = function(){
		self.currentDuck().clickCount(self.currentDuck().clickCount()+1); 

}
}


ko.applyBindings(new ViewModel()); 



