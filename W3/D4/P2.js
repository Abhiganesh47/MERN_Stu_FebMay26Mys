// Array iterattion 
let numarray = [1,2,3,4];

for(let i=0;i<numarray.length;i++){
    console.log(numarray[i])
}
for(let num of numarray){
    console.log("",num);
}
// forEach
numarray.forEach((val,idx) => {
    console.log("",idx,val);
});
