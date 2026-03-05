// Reduce method
let nums = [5,10,15];

let total = nums.reduce((intermediateSUM , current) => intermediateSUM + current,0);
// let avg = total /nums.length;
// console.log(total);
// console.log(avg);

// reduce to Object count by category
let items =["pen","pencil","pen","eraser"];
let count = items.reduce((wholeArray,item)=>{
    wholeArray[item]=(wholeArray[item] || 0)+ 1;
    return wholeArray;
},{});
console.log("Item count: ",count);