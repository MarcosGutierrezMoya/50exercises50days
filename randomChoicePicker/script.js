const textArea = document.getElementById("textarea");
const tags = document.getElementById("tags");
let text = "";
let rdm = -1;
let interval;
let options;
let rdmSelect = false;

textArea.addEventListener("keydown",splitText)

function splitText(event){
    if (rdmSelect) {
        rdmSelect = false;
        tags.innerHTML = "";
    }
    if(event.target.value[event.target.value.length-1] === ","){
        tags.innerHTML += `<p class="option">${text}</p>`;
    }
    else if(event.key === "Enter"){
        event.preventDefault();
        options = document.getElementsByClassName("option");
        interval = setInterval(changeColor, 100);
        event.target.value = null;
        setTimeout(() => {
            clearInterval(interval);
            rdmSelect = true;
        }, 3000);
    }
    else{
        text = event.target.value.slice(event.target.value.lastIndexOf(",") + 1);
    }
}

function changeColor() {
    if (rdm !== -1) {
        options[rdm].classList.remove("active")
    }
    rdm = Math.floor(Math.random()*(options.length));
    options[rdm].classList.add("active");
}