// How Cookie is used to track session ID

// / Simulated server-side session store
const sessionStore = {
    "abc123":{
        userId: 101,
        username:"Abhi",
        role:"student"
    }
};
// Simulated browser cookie value
const browserCookieSession = "abc123";

const sessionData = sessionStore[browserCookieSession];
console.log("Server-side session data: ",sessionData);