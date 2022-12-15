const closeBtn = document.getElementById("toggle");
let menuTitle = document.getElementsByTagName("li");
const nav = document.getElementById("nav");

closeBtn.addEventListener("click",()=>{
    closeBtn.classList.toggle("active")
    closeBtn.children[0].classList.toggle("line1");
    closeBtn.children[1].classList.toggle("line2");
    for (let i = 0; i < menuTitle.length; i++) {
        menuTitle[i].classList.toggle("active");
    }
    nav.classList.toggle("active");
})