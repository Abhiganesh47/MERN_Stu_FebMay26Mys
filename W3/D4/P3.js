// array Map
let numbers=[1,2,3,4];
let squared=numbers.map(num=>num*num);
console.log(squared);
// price example for map 
let prices = [100,200,300,400]
let priceWithGST = prices.map(price => price + price*0.18);
console.log("Price with out tax: ",prices);
console.log("Price with tax: ",priceWithGST);

// Using the map to extract files
let users = [
    {name:"Abhi",age: 21},
    {name:"mana",age : 28}
];
let names = users.map(user => user.name);
console.log(names);