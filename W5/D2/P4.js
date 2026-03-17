// Writing custom callback functions
function processStudent(name, score,callback,callback2) {
    console.log("Student name:", name);
    console.log("Score:", score);

    callback(name,score);
    callback2(name,score);
}
function showResult(name,score) {
    if (score >= 70) {
        console.log(name + " has passed.");
    }
    else {
        console.log(name + " has failed.");
    }
}
function showGrade(name, score) {
    if (score >= 85) {
        console.log("Grade:A+");
    }
    else if (score >= 75) {
        console.log("Grade:A");
    }
    else if (score >= 70) {
        console.log("Grade:B");
    }
    else {
        console.log("Fail");
    }
}

processStudent("abhi",86,showGrade,showResult); // invoking the function