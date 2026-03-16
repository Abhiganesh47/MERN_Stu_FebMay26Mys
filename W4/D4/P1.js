const out = document.getElementById("out");
const inspectBtn = document.getElementById("inspectBtn");

inspectBtn.addEventListener("click",function(){
    const info = {
        htmlLang : document.documentElement.lang, 
        charset : document.characterSet,
        // Browser's  primary preffered laanaguague
        browserLanguague : navigator.language, 
        // Array of all browsers languague
        browserLanguagues : navigator.languages,
        sampleText : document.getElementById("sampleText").textContent
    };
    console.log(info);
    out.textContent = JSON.stringify(info,null,2);
});