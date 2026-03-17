// Introduction to Promises
console.log("Program started.");
function getWelcomeMessage(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Welcome to Promises");
        },1000);
    });
}
const messagePromise = getWelcomeMessage();

console.log("Promise creted. Result not ready yet.");

messagePromise.then(function(message){
    console.log(message);
});

console.log("Program continues while the promise is pending.");