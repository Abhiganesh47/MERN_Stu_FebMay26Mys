import React from "react";
//prop destructuring
//Child Components
function UserProfile(username,skill){
    return(
        <div>
            <p>User: {username}</p>
            <p>Skill: {skill}</p>
        </div>
    )
}

//Parent component
export function PropDestructuring(){
    return(
        <>
        <h2>Prop Destructuring</h2>
        <UserProfile username="Abhi" skill="React"/>
        </>
    );
}