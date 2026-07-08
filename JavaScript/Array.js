
/* 
const marks = [35, 55, 68, 45, 17, 54];

marks.forEach(function (el, index){
    console.log(`${el} at index: ${index}`)

});// =======================================================
//            JAVASCRIPT ARRAYS - COMPLETE GUIDE
// =======================================================

// Creating Arrays
let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr);

// -------------------------------------------------------
// LENGTH
// -------------------------------------------------------
console.log("\nlength");
console.log(arr.length);

// -------------------------------------------------------
// ACCESS ELEMENTS
// -------------------------------------------------------
console.log("\nAccess");
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[arr.length - 1]);

// -------------------------------------------------------
// MODIFY ELEMENT
// -------------------------------------------------------
console.log("\nModify");
arr[1] = 25;
console.log(arr);

// -------------------------------------------------------
// PUSH()
// Adds at end
// -------------------------------------------------------
console.log("\npush()");
arr.push(60);
console.log(arr);

// -------------------------------------------------------
// POP()
// Removes last
// -------------------------------------------------------
console.log("\npop()");
let removed = arr.pop();
console.log("Removed:", removed);
console.log(arr);

// -------------------------------------------------------
// UNSHIFT()
// Adds at beginning
// -------------------------------------------------------
console.log("\nunshift()");
arr.unshift(5);
console.log(arr);

// -------------------------------------------------------
// SHIFT()
// Removes first
// -------------------------------------------------------
console.log("\nshift()");
console.log(arr.shift());
console.log(arr);

// -------------------------------------------------------
// INDEXOF()
// -------------------------------------------------------
console.log("\nindexOf()");
console.log(arr.indexOf(30));
console.log(arr.indexOf(100));

// -------------------------------------------------------
// LASTINDEXOF()
// -------------------------------------------------------
console.log("\nlastIndexOf()");
let nums = [1,2,3,2,4,2];
console.log(nums.lastIndexOf(2));

// -------------------------------------------------------
// INCLUDES()
// -------------------------------------------------------
console.log("\nincludes()");
console.log(arr.includes(40));
console.log(arr.includes(100));

// -------------------------------------------------------
// AT()
// -------------------------------------------------------
console.log("\nat()");
console.log(arr.at(2));
console.log(arr.at(-1));

// -------------------------------------------------------
// CONCAT()
// -------------------------------------------------------
console.log("\nconcat()");
let arr2 = [70,80];
let merged = arr.concat(arr2);
console.log(merged);

// -------------------------------------------------------
// JOIN()
// -------------------------------------------------------
console.log("\njoin()");
console.log(arr.join("-"));
console.log(arr.join(" "));

// -------------------------------------------------------
// REVERSE()
// -------------------------------------------------------
console.log("\nreverse()");
let reverseArray = [...arr];
reverseArray.reverse();
console.log(reverseArray);

// -------------------------------------------------------
// SORT()
// -------------------------------------------------------
console.log("\nsort()");
let random = [5,1,10,2,7];

random.sort((a,b)=>a-b);
console.log(random);

random.sort((a,b)=>b-a);
console.log(random);

// -------------------------------------------------------
// SLICE()
// Doesn't modify original
// -------------------------------------------------------
console.log("\nslice()");
console.log(arr.slice(1,4));
console.log(arr);

// -------------------------------------------------------
// SPLICE()
// Modifies original
// -------------------------------------------------------
console.log("\nsplice()");
let spliceArray = [10,20,30,40,50];

spliceArray.splice(2,1);
console.log(spliceArray);

spliceArray.splice(2,0,35);
console.log(spliceArray);

// -------------------------------------------------------
// FILL()
// -------------------------------------------------------
console.log("\nfill()");
let fillArray = [1,2,3,4,5];
fillArray.fill(0,2,5);
console.log(fillArray);

// -------------------------------------------------------
// COPYWITHIN()
// -------------------------------------------------------
console.log("\ncopyWithin()");
let copy = [1,2,3,4,5];
copy.copyWithin(0,3);
console.log(copy);

// -------------------------------------------------------
// FOREACH()
// -------------------------------------------------------
console.log("\nforEach()");
arr.forEach((value,index)=>{
    console.log(index,value);
});

// -------------------------------------------------------
// MAP()
// -------------------------------------------------------
console.log("\nmap()");
let doubled = arr.map(num=>num*2);
console.log(doubled);

// -------------------------------------------------------
// FILTER()
// -------------------------------------------------------
console.log("\nfilter()");
let even = arr.filter(num=>num%2===0);
console.log(even);

// -------------------------------------------------------
// REDUCE()
// -------------------------------------------------------
console.log("\nreduce()");
let sum = arr.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

// -------------------------------------------------------
// REDUCERIGHT()
// -------------------------------------------------------
console.log("\nreduceRight()");
let letters = ['a','b','c'];
let result = letters.reduceRight((acc,val)=>acc+val);
console.log(result);

// -------------------------------------------------------
// FIND()
// -------------------------------------------------------
console.log("\nfind()");
console.log(arr.find(x=>x>30));

// -------------------------------------------------------
// FINDINDEX()
// -------------------------------------------------------
console.log("\nfindIndex()");
console.log(arr.findIndex(x=>x>30));

// -------------------------------------------------------
// FINDLAST()
// -------------------------------------------------------
console.log("\nfindLast()");
let data=[10,15,20,25,30];
console.log(data.findLast(x=>x%10===0));

// -------------------------------------------------------
// FINDLASTINDEX()
// -------------------------------------------------------
console.log("\nfindLastIndex()");
console.log(data.findLastIndex(x=>x%10===0));

// -------------------------------------------------------
// SOME()
// -------------------------------------------------------
console.log("\nsome()");
console.log(arr.some(x=>x>40));

// -------------------------------------------------------
// EVERY()
// -------------------------------------------------------
console.log("\nevery()");
console.log(arr.every(x=>x>0));

// -------------------------------------------------------
// FLAT()
// -------------------------------------------------------
console.log("\nflat()");
let nested=[1,[2,3],[4,[5,6]]];
console.log(nested.flat());
console.log(nested.flat(2));

// -------------------------------------------------------
// FLATMAP()
// -------------------------------------------------------
console.log("\nflatMap()");
let words=["hello","world"];
console.log(words.flatMap(word=>word.split("")));

// -------------------------------------------------------
// KEYS()
// -------------------------------------------------------
console.log("\nkeys()");
for(let key of arr.keys()){
    console.log(key);
}

// -------------------------------------------------------
// VALUES()
// -------------------------------------------------------
console.log("\nvalues()");
for(let value of arr.values()){
    console.log(value);
}

// -------------------------------------------------------
// ENTRIES()
// -------------------------------------------------------
console.log("\nentries()");
for(let [index,value] of arr.entries()){
    console.log(index,value);
}

// -------------------------------------------------------
// ARRAY.ISARRAY()
// -------------------------------------------------------
console.log("\nArray.isArray()");
console.log(Array.isArray(arr));
console.log(Array.isArray("Hello"));

// -------------------------------------------------------
// ARRAY.FROM()
// -------------------------------------------------------
console.log("\nArray.from()");
console.log(Array.from("HELLO"));
console.log(Array.from([1,2,3],x=>x*10));

// -------------------------------------------------------
// ARRAY.OF()
// -------------------------------------------------------
console.log("\nArray.of()");
console.log(Array.of(1,2,3,4));
console.log(Array.of(5));

// -------------------------------------------------------
// DESTRUCTURING
// -------------------------------------------------------
console.log("\nDestructuring");
let [a,b,c] = arr;
console.log(a,b,c);

// -------------------------------------------------------
// SPREAD OPERATOR
// -------------------------------------------------------
console.log("\nSpread");
let spread=[...arr,100,200];
console.log(spread);

// -------------------------------------------------------
// REST OPERATOR
// -------------------------------------------------------
console.log("\nRest");
let[first,...rest]=spread;
console.log(first);
console.log(rest);

// -------------------------------------------------------
// LOOPING
// -------------------------------------------------------
console.log("\nFor Loop");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("\nFor Of");
for(let value of arr){
    console.log(value);
}

console.log("\nFor In");
for(let index in arr){
    console.log(index,arr[index]);
}

// -------------------------------------------------------
// MULTI-DIMENSIONAL ARRAY
// -------------------------------------------------------
console.log("\n2D Array");
let matrix=[
    [1,2],
    [3,4],
    [5,6]
];

console.log(matrix[1][1]);

for(let row of matrix){
    console.log(row);
}

// -------------------------------------------------------
// CHAINING
// -------------------------------------------------------
console.log("\nMethod Chaining");

let output = [1,2,3,4,5,6]
.filter(x=>x%2===0)
.map(x=>x*x)
.reduce((a,b)=>a+b,0);

console.log(output);

// -------------------------------------------------------
// IMMUTABLE EXAMPLE
// -------------------------------------------------------
console.log("\nImmutable");

const original=[1,2,3];

const newArray=[...original,4];

console.log(original);
console.log(newArray);

console.log("\n===== END OF JAVASCRIPT ARRAY METHODS =====");

*/

const marks = [10, 20, 30, 20, 50];
console.log(marks.filter((el) => el === 20));
console.log(marks.sort((a, b) => a - b));
console.log(marks.sort((a, b) => b - a));