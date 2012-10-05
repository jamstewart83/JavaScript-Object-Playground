/**
 * Gives us local access to the console for debugging
 * @type {[type]}
 */
var console = console || null;

var Class = {};

Object.prototype.extend = function (child) {
//	func.apply(Class.prototype, arguments);
	var prototype = {};

	if (typeof this === "function") {
		prototype = new this(); // Start the new prototype, based on what called extend
	}

	child.apply(prototype, arguments); // Apply the childs prototype
	prototype.base = prototype;

	// I need to find a way of being able to call the base version of a fucntion.

	/**
	 * This is the constructor which then calls an init method if it exists
	 */
	function BaseClass() {
		if (this.init) {
			this.init.apply(this, arguments);
		}
	}

	// Set the prototype
	BaseClass.prototype = prototype;

	// Ensure that what we return is able to be extended again
	BaseClass.extend = arguments.callee;

	return BaseClass;
}

var Animal = Class.extend(function(){
	this.priVar = 3;
	this.init = function(){};
	this.incrementPriVar = function(i){
		this.priVar = this.priVar + (i || 1);
	}
	this.getpriVar = function(){
		return this.priVar;
	}
});

var Dog = Animal.extend(function(){
	this.name = "Name";
	this.init = function(name){
		if(name){
			this.name = name;
		}
	};
	this.updateName = function(name){
		return this.name = this.name + "_2";
	}
	this.incrementPriVar = function(i){
		
	}
});

var BlackLab = Dog.extend(function(){
	this.coat = "Black medium length";
});

var snake = new Animal();
var spot = new Dog("spot");
var rover = new BlackLab("rover");

console.log(spot instanceof Animal && spot instanceof Dog);
console.log(spot);
console.log(rover);
spot.updateName();
console.log(spot.name);
console.log(rover.name);
snake.incrementPriVar();
spot.incrementPriVar();
console.log(snake.priVar);
console.log(rover.priVar);
console.log(spot.priVar);