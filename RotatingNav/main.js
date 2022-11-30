let btnClose = document.getElementById("close");
btnClose.addEventListener("click",closeMenu)
let btnOpen = document.getElementById("open");
btnOpen.addEventListener("click",openMenu)

let circleContainer = document.getElementsByClassName("circle")[0];
let container = document.getElementsByClassName("container")[0];
let nav1 = document.getElementsByClassName("fa-home")[0].closest("li");
let nav2 = document.getElementsByClassName("fa-user-alt")[0].closest("li");
let nav3 = document.getElementsByClassName("fa-envelope")[0].closest("li");
nav1.classList.add("out");
nav2.classList.add("out");
nav3.classList.add("out");

function closeMenu(){
    circleContainer.classList.remove("rotaCircle");
    container.classList.remove("containerRotate");
    nav1.classList.remove("menu1");
    nav2.classList.remove("menu2");
    nav3.classList.remove("menu3");
    nav1.classList.add("out1");
    nav2.classList.add("out2");
    nav3.classList.add("out3");
}
function openMenu(){
    circleContainer.classList.add("rotaCircle");
    container.classList.add("containerRotate");
    nav1.classList.remove("out1");
    nav2.classList.remove("out2");
    nav3.classList.remove("out3");
    nav1.classList.add("menu1");
    nav2.classList.add("menu2");
    nav3.classList.add("menu3");
}