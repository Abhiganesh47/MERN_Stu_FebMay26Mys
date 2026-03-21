// document.addEventListener("DOMContentLoaded", function(){
//     // Render Skills
//     renderSkills();
//     initModal();
//     initContactValidation();
//     initThemeToggle();
//     SearchProjects();
// })


document.addEventListener("DOMContentLoaded", function(){

    renderSkills();
    initModal();
    initContactValidation();
    initThemeToggle();
    initProjectSearch();
    initProjectFilter();

    renderProjects(projectsData);
});


// ===== LIKE SYSTEM =====
function getLikes(id){
    return localStorage.getItem("like_" + id) || 0;
}

function likeProject(id){
    let val = getLikes(id);
    localStorage.setItem("like_" + id, ++val);
    showToast("Liked ❤️");
    renderProjects(projectsData);
}


// ===== RENDER PROJECTS =====
function renderProjects(data){
    const container = document.getElementById("projects-container");

    if(!container){
        console.log("Projects container not found");
        return;
    }

    container.innerHTML = "";

    data.forEach(project => {

        const card = document.createElement("div");
        card.className = "p-6 bg-white rounded-2xl shadow-lg";

        card.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${project.name}</h3>
            <p class="text-sm mb-2">${project.description}</p>

            <p class="text-xs mb-2"><b>Tech:</b> ${project.technologies.join(", ")}</p>

            <p class="text-xs mb-2"><b>Status:</b> ${project.status}</p>

            <div class="flex gap-3 mt-3">
                <a href="${project.liveDemo}" class="bg-green-400 px-3 py-1 rounded text-sm">Live</a>
                <a href="${project.github}" class="bg-gray-400 px-3 py-1 rounded text-sm">Code</a>
            </div>

            <button onclick="likeProject(${project.id})"
                class="mt-4 bg-red-400 text-white px-3 py-1 rounded">
                ❤️ ${getLikes(project.id)}
            </button>
        `;

        container.appendChild(card);
    });
}


// ===== SORT FEATURE =====
const sortDropdown = document.getElementById("project-sort");

if(sortDropdown){
    sortDropdown.addEventListener("change", function(e){
        let sorted = [...projectsData];

        if(e.target.value === "name"){
            sorted.sort((a,b)=> a.name.localeCompare(b.name));
        }

        if(e.target.value === "likes"){
            sorted.sort((a,b)=> getLikes(b.id) - getLikes(a.id));
        }

        renderProjects(sorted);
    });
}


// ===== TOAST =====
function showToast(msg){
    const toast = document.getElementById("toast");

    if(!toast) return;

    toast.textContent = msg;
    toast.classList.remove("hidden");

    setTimeout(()=> toast.classList.add("hidden"),2000);
}


// ===== TYPING EFFECT =====
const roles = ["Cloud Engineer","Game Developer","MERN Developer"];
let i=0,j=0,del=false;

function typing(){
    const el = document.getElementById("typing-text");
    if(!el) return;

    let text = roles[i];

    el.innerText = text.substring(0,j);

    if(!del) j++; else j--;

    if(j === text.length) del = true;
    if(j === 0){
        del = false;
        i = (i+1)%roles.length;
    }

    setTimeout(typing, del ? 50 : 100);
}
typing();


// ===== GITHUB API =====
fetch("https://api.github.com/users/Abhiganesh47")
.then(res => res.json())
.then(data => {
    const el = document.getElementById("github-stats");
    if(el){
        el.innerText = `${data.public_repos} Repos • ${data.followers} Followers`;
    }
});


// ===== BACK TO TOP =====
const topBtn = document.getElementById("backToTop");

if(topBtn){
    window.addEventListener("scroll",()=>{
        topBtn.classList.toggle("hidden", window.scrollY < 300);
    });

    topBtn.onclick = ()=> window.scrollTo({top:0,behavior:"smooth"});
}


// ===== COPY EMAIL =====
const copyBtn = document.getElementById("copy-email");

if(copyBtn){
    copyBtn.onclick = ()=>{
        navigator.clipboard.writeText("your@email.com");
        showToast("Email copied!");
    }
}