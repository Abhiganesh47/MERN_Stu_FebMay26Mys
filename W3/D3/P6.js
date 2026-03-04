// Nested Object & Method
const student = {
    firstName: "Abhi",
    lastName:"ganesh",
    score: {
        math:78,science:68
    },
    hobbies:["reading","singing"],
    fullname: function(){
        return this.firstName + " "+this.lastName;
    },
    greet(){
        console.log("Hi, ",this.fullname());
    }
};
console.log(student.fullname());