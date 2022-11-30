let img = document.getElementsByClassName("panel");
for (let i = 0; i < img.length; i++) {
    if (!img[i].classList.contains("active")) {
        img[i].querySelector("h3").hidden=true;
    }
    img[i].addEventListener("click",resize);
}

function resize(panel){
    let active = document.getElementsByClassName("active")[0];
    if (!panel.target.classList.contains("active")) {
        active.classList.remove("active");
        panel.target.classList.add("active");
        panel.target.querySelector("h3").hidden=false;
    }
}