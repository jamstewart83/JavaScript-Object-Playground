/**
 * Gives us local access to the console for debugging
 * @type {[type]}
 */
var console = console || null;

/**
 * Animal object
 * @param {[type]} numberOfLegs Number of legs the animal has
 */
function Animal(numberOfLegs) {
	"use strict";

	// Private variable for legs, accessed by the getLegs function
	var legs = numberOfLegs || 2;

	this.getLegs = function () { return legs; };
	this.lostLeg = function () { legs = legs - 1; };
}

/**
 * Extension of the animal class
 */
function Dog(name) {
	"use strict";
	Animal.call(this,4);
}

// Log out our test s
if (console) {
	var tweety = new Animal(2);
	var spot = new Dog("spot");
	var spot2 = new Dog("spot2");
	console.log(tweety, tweety instanceof Animal);
	console.log(spot, spot instanceof Dog);
	console.log(spot2, spot2 instanceof Dog);
	console.log(spot.getLegs(), spot2.getLegs());
	spot.lostLeg();
	console.log(spot, spot instanceof Dog);
	console.log(spot2, spot2 instanceof Dog);
	console.log(spot.getLegs(), spot2.getLegs());
}
