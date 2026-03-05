// Array Basics 
console.log("Array Basics");
// Creating arrays
let emptyarray = [];
let numarray = [1,2,3,4];
let mixedarray =[42,"hello",true,null,{name:"abhi"},[5,6]];
console.log(emptyarray);
console.log(numarray);
console.log(mixedarray);

// using constructor
let fruits = new Array("Apple","Mango");
console.log(fruits);
console.log("Is fruits array?",Array.isArray(fruits));

// push: is to add
fruits.push("banana");
console.log(fruits);
// pop: is to remove
fruits.pop();
console.log(fruits);
// unshift: adds to the beginning
fruits.unshift("Orange");
console.log(fruits);
// shift : remove from beginning
fruits.shift();
console.log(fruits);