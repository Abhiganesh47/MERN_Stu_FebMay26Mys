// Array destruction
const items = {
    item1: "Laptop",
    item2: "server",
    item3: "cloudAPI"
};


for(const[keys,itemName]of Object.entries(items)){
    console.log((`${keys}:${itemName}`))
}