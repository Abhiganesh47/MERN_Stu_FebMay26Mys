// Synthetic event vs Native DOM events
// Synthetic events:
// A wrapper created by React around the browser's native event
//  Gives a consistent API across browsers
//  works similarly to native DOM events
// Still allows access to the original browser events via event.nativeEvent

// Why does React use it ?
// To make event handling behave consistently
// TO simplify cross-browser differences
// To integrste smoothhly with React's event system

// Hoow Synthetic events works:
//  Component render:
    //  A button appears on the screen
    // handelClick is defined but it is not executed
    
// User Clicks the button:
    // Browser creates a native click event
    // React wraps that native event in a SyntheticEvent
    // React passes the SyntheticEvent to handleClick

    // event refers to the SyntheticEvent
    // event.target gives us the HTML elements
