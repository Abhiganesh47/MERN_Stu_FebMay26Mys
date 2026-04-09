// Main Express serever entery point
const app = require("./app");

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server tunning on http://localhost:${PORT}`);
});