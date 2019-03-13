// importing my-library module
const myLibrary = require('./my-library');
const uuid = require('uuid');
const newUuid = uuid();

// executing my-library
myLibrary.myFirstMethod();
console.log(`your new Universally unique identifier is ${newUuid}`);