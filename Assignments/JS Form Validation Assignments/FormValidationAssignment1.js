//  FAQ Builder with Dynamic Sections
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addBtn");
const faqList = document.getElementById("faqList");
const emptyMsg = document.getElementById("emptyMsg");

addBtn.addEventListener("click", function()
 {
    let question = questionInput.value.trim();
    let answer = answerInput.value.trim();
    if (question.length < 5) {
        emptyMsg.textContent="Question must be at least 5 characters";
        return;
    }
    if (answer.length < 15) {
        emptyMsg.textContent="Answer must be at least 15 characters";
        return;
    }


    let faq = document.createElement("div");
    faq.className = "faq";
    faq.innerHTML = `<h3>${question}</h3> 
    <p>${answer}</p> 
    <button class="delete">Delete</button>`;

    faq.querySelector("h3").insertAdjacentHTML("beforeend",`<span class="badge">FAQ</span>`);
    faq.querySelector(".delete").addEventListener("click", function () {
        faq.remove();
        if (faqList.children.length === 0) {
            emptyMsg.style.display = "block";
        }
    });
    
    faqList.appendChild(faq);
    questionInput.value = "";
    answerInput.value = "";
});