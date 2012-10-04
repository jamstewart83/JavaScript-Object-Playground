Object Playground
==================

Inludes:

Module Pattern
==============
This has the module pattern that includes an example of inheritance where we clone a base object into a new object.  Needs work extending works fine but I'm not happy with the way the code flows.  I'd prefer to get to a point where I have modules and extended modules follwed but something that then creates instances of these modules.

Inheritance
==============
I've added a few examples of achieving inheritance but I'm trying to hit a perfect implementation, I know it's out there! I want to be at a point where it's simple to create new instances and the result of that is an object that has the correct prototype chain, access to base class functionality even if it's been overriden, the ability to have private variables which aren't shared across multiple instances of the same object (the resultant of Class.prototype = new BaseClass()).