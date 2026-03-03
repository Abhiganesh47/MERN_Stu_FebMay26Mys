// Function Scope

function scope(){
    var insideVar =10;
    let insideLet =20;
    const insideConst =30;
    console.log(insideVar);
    console.log(insideLet);
    console.log(insideConst);
}
scope();


function varFunctionScoped(){
    if(true){
        var x = 40;
    }
    console.log("x : ",x);
}
varFunctionScoped();