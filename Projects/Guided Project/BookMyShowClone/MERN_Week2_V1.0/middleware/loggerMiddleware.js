// Middleware for req log

function loggerMiddleware(req,res,next){
    console.log(`${req.method} ${req.originalUel}`);
    next();
}
module.exports = loggerMiddleware
// Task: write the log to a file along with time stamp with both req & res