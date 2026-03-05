// filter method
let marks = [75, 49, 56, 70, 82, 51, 68];
// let passed = marks.filter(mark => mark >= 70);

// console.log(marks);
// console.log(passed);

let students = [
    { name: "Abhi", marks: 75 },
    { name: "mana", marks: 49 },
    { name: "raki", marks: 56 },
    { name: "ravi", marks: 70 },
    { name: "maha", marks: 82 },
    { name: "jerry", marks: 51 },
    { name: "rohit", marks: 68 }
];
let qualifiedStudents = students.filter(student => student.marks >=70);//.map(student => student.name);
console.log(qualifiedStudents);