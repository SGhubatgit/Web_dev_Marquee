// why fuctions are called first class citizens : -

//1. functions can be assigned in variables...

var greet = function(){
    return "Hello World!";
};

console.log(greet());

//2. functions can be passed in the parameter of a function as an argument......

function Welcome(name) {
    console.log("Hello, " + name);
}

function processUser(callback) {
    callback("Sudhanshu");
}

processUser(Welcome);

//3. fuctions can be returned as well in a function


function outerFunction() {
    function innerFunction() {
        console.log("Hello from the inner function!");
    }

    return innerFunction;
}

const result = outerFunction();
result();