/**
 * Gives us local access to the console for debugging
 * @type {[type]}
 */
var console = console || null;

/**
 * Gives us the ability to extend any object from another
 * @param  {[type]} obj the object you are extending from
 * @return {[type]}     [description]
 */
Object.prototype.extend = function (base) {
	"use strict";
	var prop = "";

	for (prop in base) {
        if (base.hasOwnProperty(prop)) {
            this[prop] = base[prop];
        }
    }
}

/**
 * Animal object
 * @param {[type]} numberOfLegs Number of legs the animal has
 */
function Animal(numberOfLegs) {
	"use strict";

	// Private variable for legs, accessed by the getLegs function
	var legs = numberOfLegs;

	this.getLegs = function () { return legs; };
	this.lostLeg = function () { this.legs = this.legs - 1; };
}

/**
 * Extension of the animal class
 */
function Dog(name) {
	"use strict";
	
	var base = new Animal(2); // Set our base class to be an animal
	this.extend(base); // Extend our Dog class from the Animal class

	this.name = name; // Add a name property
	
	// Override the getLegs function
	this.getLegs = function(){ 
		var animalLegs = base.getLegs(); // Call the base method
		return animalLegs + 2; 
	}
}

// Log out our test s
if (console) {
	var tweety = new Animal(2);
	var spot = new Dog();
	
	console.log(tweety,tweety instanceof Animal);
	console.log(spot,spot instanceof Animal);
	console.log(spot.getLegs());
}
