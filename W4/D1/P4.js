// // Logging

// console.log("Console logging");

// console.warn("Warning message");

// console.error("Error message");

// let user = [
//     {id:1,name:"Abhi"},
//     {id:2,name:"rahul"}
// ];
// console.log(user);
// console.table(user);

// // Group related logs
// console.group("Grouped logs");
// console.log("Log 1");
// console.log("Log 2");
// console.log("Log 3");
// console.groupEnd();

// measure execution time
console.time("LoopTimer");
for(let i= 0; i<100; i++){
console.timeEnd("Loop timer");
}