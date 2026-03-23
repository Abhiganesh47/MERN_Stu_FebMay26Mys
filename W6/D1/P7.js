// Understanding path module and JSON module

const path = require("path");
// JSON is loaded as a normal JS object in CommonJS
const appConfig = require("./support/app-config.json");

console.log("__dirname",__dirname); //__dir name :- directory name location
console.log("__filename",__filename); // __filename :_ file location

console.log("Application name: ",appConfig.appName);
console.log("Environment name:",appConfig.environment);
console.log("Features name: ",appConfig.features.join(", ")); // join invokes the  ,  .

// support file created 