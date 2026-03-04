// Basics of Objects
const person = {
    name:"Abhi",
    age:"21",
    isStudent: true
} ;
console.log("Person: ",person);
console.log("name:",person.name); //dot notation
console.log("age:",person["age"]); //bracket notation

// Add a new property
person.city = "Mysore";
console.log(person);
// modify
person.age = "22";
console.log(person);
// delete
delete person.isStudent;
console.log(person);

// Object constructor
const car = new Object();
car.make = "audi";
car.model = "A4";
car.year =  2015;
console.log(car);