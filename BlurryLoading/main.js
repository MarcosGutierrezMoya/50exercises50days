let loading = document.getElementsByClassName("loading-text")[0];
loading.style.pointerEvents = "none";
let bg = document.getElementsByClassName("bg")[0];

function Blurreo() {
    loading.hidden = false;
    let num = 0;
    let blurSize = 100;
    bg.style.filter = `blur(${blurSize}px)`
    counter()
    function counter() {
        setTimeout(() => {
            num++;
            blurSize--;
            loading.innerHTML=num+"%";
            bg.style.filter = `blur(${blurSize}px)`
            if (num<100) {
                counter()
            }
            else{
                setTimeout(() => {
                    loading.hidden = true;
                }, 300);
            }
        }, 30);
    }
}

//#region Moving Images
let div = document.getElementsByClassName("active");
let divNum = 0;
let divMoving = "";
let containers = document.getElementsByClassName("container");

let mousePosition;
let offset = [0,0];
let isOnDiv = false;
let isMoving = false;
let container = 0;
let isDown = false;

for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener("mouseenter", function(){
        containers[i].classList.add("onIt");
        isOnDiv = true;
        container = i;
    })
    containers[i].addEventListener("mouseleave", function(){
        isOnDiv = false;
    })
}
for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            div[i].offsetLeft - e.clientX,
            div[i].offsetTop - e.clientY,
            divNum = i
        ];
        if (containers[container].classList.contains("onIt") && containers[container].firstChild) {
            divMoving = containers[container].firstChild;
            divMoving.classList.add("moving");
            divMoving.style.pointerEvents = "none";
            divMoving.style.position = "absolute";
            isMoving = true;
        }
    }, true);
}

document.addEventListener('mouseup', function() {
    if (isMoving) {
        if (containers[container].children.length == 0) {
            containers[container].appendChild(divMoving);
        }
        divMoving.style.position = "static";
        divMoving.style.pointerEvents = "auto";
        divMoving.classList.remove("moving");
        if (!isOnDiv) {
            bg.style.backgroundImage = `url(${divMoving.src})`;
            Blurreo()
        }
        isMoving = false;
        isOnDiv = false;
    }
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown && div[offset[2]].classList.contains("moving")) {
        mousePosition = {
            
            x : event.clientX,
            y : event.clientY
            
        };
        div[offset[2]].style.left = (mousePosition.x + offset[0]) + 'px';
        div[offset[2]].style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);

//#endregion