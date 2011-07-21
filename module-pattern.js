/* Normal Module */

var module = (function(){
	var module={},privateVar = 'private';
	

	module.publicVar = 'public';
	module.publicFunc = function(){console.log('public')};

	return module;
})();

console.log(module);

/* Module Pattern Inheritance */
var inhmodule = (function(base){
	var inhmodule = {},key;
	
	inhmodule = clone(base);

	inhmodule.newPublicFunc = function(){ console.log('newPublicfunc'); };
	return inhmodule;
	
})(module);

console.log(inhmodule);

/* Should be in a more global part of the framework, here for ease atm */
function clone(object){
	function Clone() {}
    	Clone.prototype = object;
    	return new Clone();
}
