const textArea = document.getElementById("textarea");
const tags = document.getElementById("tags");
let text = "";
let random = -1;
let interval;
let options;
let randomSelect = false;

textArea.addEventListener("keydown",splitText)

function splitText(event){
    console.log(event.key);
    if (randomSelect) {
        randomSelect = false;
        tags.innerHTML = "";
    }
    
    if(event.key === ","){
        tags.innerHTML += `<p class="option"></p>`;
    }
    else if(event.key === "Enter"){
        event.preventDefault();
        options = document.getElementsByClassName("option");
        interval = setInterval(changeColor, 100);
        event.target.value = null;
        setTimeout(() => {
            clearInterval(interval);
            randomSelect = true;
        }, 3000);
    }
    else if(event.key === "Backspace"){
        if(event.target.value[event.target.value.length-1] === "," || event.target.value.length === 1){
            tags.lastElementChild.remove();
        }
        else{
        setTimeout(() => {
            tags.lastElementChild.textContent = event.target.value.slice(event.target.value.lastIndexOf(",") + 1);            
        }, 0.01);
        }
    }
    else{
        if (tags.childElementCount === 0) {
            tags.innerHTML = `<p class="option"></p>`;
        }
        setTimeout(() => {
            tags.lastElementChild.textContent = event.target.value.slice(event.target.value.lastIndexOf(",") + 1);            
        }, 0.01);
    }
}

function changeColor() {
    if (random !== -1) {
        options[random].classList.remove("active")
    }
    random = Math.floor(Math.random()*(options.length));
    options[random].classList.add("active");
}