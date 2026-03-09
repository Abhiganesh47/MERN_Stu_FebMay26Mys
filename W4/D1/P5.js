// Breakpoint
// Inspect the variable values
// view the call stack
// Step through code line ny line
// Evaluate expressions in the console
// watch how variables change during the execution
// to find logical errors
// browser
function calculateTotal(prices){
    let total = 0;
    for(let i = 0; i<prices.length;i++){
        let price = prices[i];
        debugger;
        total +=price;
    }
    return total;
}

let cart = [100,250,150,1000,220];
// calculateTotal(cart);
console.log("Total: ",calculateTotal(cart));

console.log(document.body);