// An Async function always returns a Promise
async function getStatusmessage() {
    return "Order is Ready";
}
const result = getStatusmessage();

console.log("Is this returned value a promise ? ",result instanceof Promise);

result.then(function(message){
    console.log("Resolved value: ",message);
});