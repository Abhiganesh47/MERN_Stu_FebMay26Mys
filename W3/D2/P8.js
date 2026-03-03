// Default parameters
function product (a=2,b=2){
    return a*b;
}
console.log("Product of 15 and 4: ",product(15,4));
console.log("Product of 15 and b: ",product(15));

// rest parameters
function sumOFAll(...numbers){
    console.log(...numbers);   
}
sumOFAll(1,3,5);
sumOFAll(10);