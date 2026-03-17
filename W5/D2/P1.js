// Introduction to CallBack Function
function greetUser(name,callback){
    console.log("Hello, " +name);
    // the callback function is executed only after the execution of the current function
    callback();
}
function showCompletionMessage(){
    console.log("The Greeting task is completed");
}

greetUser("Abhiganesh",showCompletionMessage);