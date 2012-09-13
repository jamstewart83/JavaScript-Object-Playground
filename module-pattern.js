/* Should be in a more global part of the framework, here for ease atm */

Object.prototype.clone = function (){
	function Clone() {}
    	Clone.prototype = this;
    	return new Clone();
}

/* Normal Module */
var module = (function(){
	var module={}, // Return module for public object
	privateVar = 'private'; // Private variable
	

	module.publicVar = 'public'; // Public variable
	module.publicFunc = function(){console.log('public')}; // Public function

	return module; // Return public object
})();

console.log(module);

/* Module Pattern Inheritance */
var inhmodule = (function(base){
	var inhmodule = {}, // Return module for public object

	inhmodule = base.clone(); // Clone object to allow for inheritance

	inhmodule.newPublicFunc = function(){ console.log('newPublicfunc'); }; // Public function to demo extension
	inhmodule.publicVar = "New public"; // Demo to show overriding of a variable
	inhmodule.publicFunc = function (){ console.log("New public func") } // Demo to show overriding of a function
	
	return inhmodule; // Return public object
	
})(module);


console.log(inhmodule);

