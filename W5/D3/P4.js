// Combining multiple promise-based steps with Async/await

function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        },500)
    })
}

function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                product:"Laptop",
                quatity:2
            },700);
        });
    })
}

async function showOrderSummary(){
    const orderId = await getOrderId();
    console.log("Order id: ",orderId);

    const orderDetails = await getOrderDetails(orderId);
    console.log("Product: ",orderDetails.product);
    console.log("Quantity: ",orderDetails.quatity);
}

showOrderSummary();