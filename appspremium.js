// we store the data in the model.

var model ={
//	currentduck: null, 
	ducks: [
		{
		count: 0,
		name: 1,
		img: "ente.jpg",
		},
		{
		count: 0,
		name: 2,
		img: "ente1.png",
		},
		{
		count: 0,
		name: 3,
		img: "ente2.jpg",
		},
		{
		count: 0,
		name: 4,
		img: "ente3.png",
		}
	]	
};


// this is the view for duck and for counter:

var duckView= {
	init: function(){
		// parameter of our ducks stored in the dom
		this.duckElem = document.getElementById('duck'); 		
		this.duckNameElem = document.getElementById("duckName");
		this.duckCountElem = document.getElementById("duckCount");
		this.duckImgElem = document.getElementById("duckImg");

		this.render();

		//activate duck counter
		this.duckImgElem.addEventListener("click",function(){
			octopus.incrementcount(); 
	});

},


	// render function will update our DOM
	render: function(){
			var currentduck = octopus.getCurrentDuck();
			this.duckNameElem.textContent = currentduck.name;
			this.duckCountElem.textContent = currentduck.count;
			this.duckImgElem.src = currentduck.img;
	}
};



var duckListView = {

	init: function(){
		// set the list of all ducks in general
		this.duckListElem = document.getElementbyId("ducklist");
		this.render();
	},



	render: function(){
		var duck, elem, i;

		// octopus will tell us what ducks exists in general
		var ducks= octopus.getDucks();

		//empy the duck list
		this.duckListElem.innerHtml= "";

		//loop over all ducks
		for (i=0; i <ducks.length; i++){
			//this is the duck were the loop at this very moment is 
			duck = ducks[i];

			elem.document.createElement("li");
			elem.textContent = duck.name;
			this.duckListElem.appendChild(elem);


			// set current duck, that we clicked on. VERY IMPORTANT IS THE IFFY
			elem.addEventListener("click",(function(duckcopy){
				return function(){
					octopus.setCurrentDuck(duckcopy);
					duckView.render();
				};
			})(duck)); 

		}
	}
};




// verbinde view and model durch formel miteinander
// init setzt die views und erste ente
var octopus = {
	init: function(){
		model.currentduck =model.ducks[0];
		duckView.init();
		duckListView.init();
	},

// welche Enten gibt es generell?
	getDucks: function(){
		return model.ducks; 
	},

// welche Ente ist es momentan?
	getCurrentDuck: function(){
		return model.currentduck;
	},

// welche Ente wurde gerade gewählt?
	setCurrentDuck: function(duck){
		model.currentduck= duck;
	},

// wie lautet der momentane countclicker?
	getCurrentCount: function(){
		model.ducks.count++;
		duckView.render();
	}

};

// call the function
octopus.init(); 