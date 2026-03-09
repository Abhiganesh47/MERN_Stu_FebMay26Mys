// Role-Based Route Resolver Using switch + Functions

const getRoute = function(role, isLoggedIn){
    if(isLoggedIn){
        return "/login";
    }
    else{
        switch(role){
            case "admin":
                return "/admin";
            case "student":
                return "/student";
            case "college":
                return "/college";
            case "proctor":
                return "/proctor";
            default:
                return "/denied";
        }
    }
};
console.log(getRoute("admin", true));    
console.log(getRoute("student", false));  
console.log(getRoute("proctor"));
console.log(getRoute("guest"));    
console.log(getRoute("admin"));   