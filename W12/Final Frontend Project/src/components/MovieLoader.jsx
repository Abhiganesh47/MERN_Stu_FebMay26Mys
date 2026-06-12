import { useState } from "react";

export default function MovieLoader(){
    const [isLoading,setIsLoading]=useState(true);

    return(
        <section>
            <h2>Movies</h2>
            {isLoading ? <p> LoadingMovies</p> :<p>Movie Loaded successfully</p>}
            <button onClick={()=>{setIsLoading(!isLoading)}}>toggle loading</button>
        </section>
    )
}