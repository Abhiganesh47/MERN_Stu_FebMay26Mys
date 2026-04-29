//Container/ wrapper component
import React from "react";
// children is a special React prop
//It holds nested JSX passed between component tags
//It can also be or helps create reusable wrapper/layoout components (propps)
function Container({children}){  
    return(
        <div className="card">
            {children}
        </div>
    );
}

//Parent Component
export function PropsChildren(){
    return(
        <>
            <Container>  {/* Container is the name of the children  */}
            <h3>First child element in Nested approach</h3>
            </Container>
        </>
    )
}