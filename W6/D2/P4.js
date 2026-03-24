// Using the EventEmitter class
const EventEmitter = require("events");

// create a new event emitter instance
// this object can publish events and allow listeners to subscribe

const orderEmitter = new EventEmitter();

// Register a listener for the  "orderPlaced" event.
// whenever the event is emitted,the function will execute
// once() registers a listener that automaticaly removes itself after running for the first time.
orderEmitter.once("OrderPlaced-l",function(orderId,customerName,orderBill){
    console.log("Hello ",customerName);
    console.log("Bill: ",orderBill);
    console.log("Waiting for  restarent to accept the order no.",orderId);
});

orderEmitter.on("OrderPlaced-l",function(orderId,customerName){
    console.log("Hello ",customerName);
    console.log("Restarent acceped your order no.",orderId);
});

orderEmitter.on("OrderPlaced-l",function(orderId,customerName){
    console.log("Hello ",customerName);
    console.log("Assigning delevery partner",);
});

orderEmitter.on("OrderPlaced-l",function(orderId,customerName){
    console.log("Hello ",customerName);
    console.log("raksha is delivering youur order.",orderId);
});

// emit the event with extra data
// The listener receives the orderId Value
orderEmitter.emit("OrderPlaced-l","ORD-24-03-301","Abhiganesh R ,",10000);
orderEmitter.emit("OrderPlaced-l","ORD-24-03-301","Abhiganesh R ,",10000);