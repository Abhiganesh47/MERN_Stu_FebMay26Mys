//  Multi-Section Feedback Analyzer

const form = document.getElementById("feedbackForm");
const container = document.getElementById("feedbackContainer");
const countDisplay = document.getElementById("count");
const msg = document.getElementById("msg");

let count = 0;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value;
    const text = document.getElementById("text").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !type || !text) {
        msg.textContent = "All fields are required";
        return;
    }
    if (!emailPattern.test(email)) {
        msg.textContent = "Invalid Email";
        return;
    }
    if (text.length < 20) {
        msg.textContent = "Feedback must be at least 20 characters";
        return;
    }
    let label = "";
    if (type === "Bug") {
        label = "[Needs Review]";
    }
    else if (type === "Suggestion") {
        label = "[Idea]";
    }
    else if (type === "Appreciation") {
        label = "[Positive]";
    }
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h4 class="username"></h4>
        <p class="email"></p>
        <p class="type"></p>
        <p class="label"></p>
        <p class="feedback"></p>
        <button class="delete">Delete</button>
    `;
    card.querySelector(".username").textContent = "Name: " + name;
    card.querySelector(".email").textContent = "Email: " + email;
    card.querySelector(".type").textContent = "Type: " + type;
    card.querySelector(".label").textContent = label;
    card.querySelector(".feedback").textContent = text;
    card.querySelector(".delete").addEventListener("click", function () {
        card.remove();
        count--;
        countDisplay.textContent = count;
    });
    container.appendChild(card);
    count++;
    countDisplay.textContent = count;
    form.reset();
});

