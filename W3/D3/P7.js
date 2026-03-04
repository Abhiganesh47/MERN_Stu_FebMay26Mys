// Object Iteration
const book ={
    title: "Js for newbies",
    author: "Rakesh",
    year: 2026
};

for(let key in book){ // for in loop
    console.log(key," : ",book[key]);
}

console.log("keys:",Object.keys(book));
console.log("Values:",Object.values(book));
console.log("Entries:",Object.entries(book));