// Conditional Statements
let age = 21;
if(age< 13){
    console.log("Child");
}
else if(age <18){
    console.log("teen");
}
else
{
    console.log("Adult");
}

// Switch statements
console.log("Switch statements");
const day = 'c';
switch (day) {
    case 22:
        console.log("Start of the Week");
        break;
    case "Wednesday":
        console.log("Mid of the week");
    case "Friday":
        console.log("End of the Week");
    default:
        console.log("Some day in the Week");
        break;
}

// Type Conversion
let n = Number("ABC");
console.log("n: ",n," Type of n : ",typeof n, "isNaN",isNaN(n));