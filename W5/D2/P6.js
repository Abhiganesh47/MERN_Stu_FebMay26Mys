// Callback nesting
console.log("Starting nested callback flow");

setTimeout(function(){
    console.log("Step 1: user loaded.");

    setTimeout(function(){
        console.log("Step 2: Order loaded.");

        setTimeout(function(){
            console.log("Step 3: Payment loaded.");

            setTimeout(function(){
                console.log("Step 4: Shipment loaded.");
                console.log("We Are in callback Hell!!!");
            },1000);
        },2000);
    },600);
},400);