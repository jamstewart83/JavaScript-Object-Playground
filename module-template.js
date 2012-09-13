var modules = modules || {};

/**
 * DESCRIPTION
 * @param  {[type]} LOCALGLOBALS Gives us a local instance of LOCALGLOBALS
 * @return {[type]}              Exposes our public methods and properties
 */
modules.MODULENAME = (function(LOCALGLOBALS){
    "use strict"; // Set our object to be in strict mode

    // Declare all variables here, but for readability define them later.
    var variable = "",
        privateFunc = function(){ throw new Error("privateFunc undefined"); },
        publicObj = {};

    /**
     * Initialise our object
     * @return {bool} Return a boolean to test if init was successful.
     */
    publicObj.init = function(){
        return true;
    };
}(ANYGLOBALS));