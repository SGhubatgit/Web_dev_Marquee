debugger;


var globalVariable = "I am a global variable";

console.log(globalVariable);
console.log(globalFunction);


console.log("Global Execution Context ends");

var globalFunction = function () {
    console.log("Inside global function");
};