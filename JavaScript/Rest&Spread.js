let Collectvalue = (...args) => {
    // Rest 
    console.log(...args);
}


let values = [1, 2, 3, 4, 5, 6,  "Hello"];

Collectvalue(values);



// for spread operator

[var1,  var2 , ...rest] = [...values];

console.log(var1);
console.log(var2);
console.log(...rest);

