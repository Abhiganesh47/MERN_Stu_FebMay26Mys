// Routing: Nested routes
//  "/" base url
// "/api/users"
const express = require("express");
const app = express();

// /api/users 

// Router objects help organize route Groups

const apiRouter = express.Router();

apiRouter.get("/users",function(req,res){
    res.json({
        route:"/api/users",
        message:"Users route inside api router"
    });
});
apiRouter.get("/orders",function(req,res){
    res.json({
        route:"/api/orders",
        message:"Orders route inside api router"
    });
});

// Mounting the route under the /api base path
app.use("/api",apiRouter);

// ****New Router****
// product routers   /api/products
const productRouter = express.Router();

// /api/products      ->create product
productRouter.post("/",(req,res)=>{
    res.json({
        route:"/api/products",
        message:"Create Products"
    });
});

// /api/products/:id     ->delete Products
productRouter.delete("/:id", (req,res) => {
    res.json({
        route: `/api/products/${req.params.id}`,
        message:"Delete product"
    });
});

// mount products router under /api/products
apiRouter.use("/products",productRouter);

app.listen(4001,function(){
    console.log("Express server running at http://localhost:4001");
});



// curl -X POST http://localhost:4001/api/products -H "Content-Type:application/json" -d"{\"name\":\"Abhi\",\"role\":\"admin\"}"
// curl -X DELETE http://localhost:4001/api/products/134  