import React from "react";
function Welcome(props){
    //child component: reusable UI
    return(
        <p>Hello, {props.name}</p>
    );
}

export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional Components Basics</h2>
            {/* We are passing 'Abhi' as prop  ,Welcome function receives it as {name:"Abhi"} */}
            <Welcome name="Abhi"/>
            {/* We are passing 'Developer' as prop  ,Welcome function receives it as {name:"Developer"} */}
            <Welcome name="Developer"/>
        </div>
    )
}