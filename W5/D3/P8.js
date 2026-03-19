// Try catch finally with async/await

function processPayment(isSucceed){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(isSucceed){
                resolve("Payment processed sucessfully");
            }
            else{
                reject("Paymeny couldn't process sucessfully");
            }
        },700);
    });
}

async function runPaymentFlow(isSucced){
    try{
        const result = await processPayment(isSucced);
        console.log("Success!! ",result);
    }
    catch(error){
        console.log("Failure!! ",error);
    }
    finally{
        console.log("Payment flow completed.");
    }
}

runPaymentFlow(false).catch(function(){
    return runPaymentFlow(true);
});