// Complete the js code
function Car(make, model) {
	constructor(make,model);
	this.make=make;
	this.model=model;
	getMakeModel(){
		return `${make} ${model}`;
	}
}

function SportsCar extends Car(make, model, topSpeed) {
	constructor(make,model,topSpeed);
	this.topSpeed=topSpeed;
	getTopSpeed(){
		return `${topSpeed}`;
	}
	
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
