// Basic events in React
// What is an Event
// An action triggered by the user (mouse,keyboard, DOM).
// React uses camelCase attributes like inClick , onChange...
// React passes an event obj (SyntheticEvent) to the handeler

export function EventBasics(){
    // Declaring a Event handler function
    const handlerClick = () => alert("Clicked");

    return(
        <section>
            <h2>Basic Events</h2>
            {/* Event binding */}
            <button onClick={handlerClick}>
                Click Me
            </button>

        </section>
    )
}