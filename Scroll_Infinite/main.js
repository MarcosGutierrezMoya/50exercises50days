// let boxes = document.getElementsByClassName("box");
let boxes = [];
let numBoxShow = -1;

// for (let i = 0; i < boxes.length; i++) {
//     if (i%2==0) {
//         boxes[i].style.transform = "translateX(1000px)"    
//     }
//     else{
//         boxes[i].style.transform = "translateX(-1000px)"    
//     }
// }
// let box = document.body.appendChild(document.createElement("div"))
// box.classList.add(`box`);
// box.classList.add(`${numBoxShow}`);
// box.style.visibility = "hidden";
// box.appendChild(document.createElement("h2")).innerText = "Content";
// boxes.push(box);
// numBoxShow++;
// if (i%2==0) {
//     boxes[i].style.transform = "translateX(1000px)";
// }
// else{
//     boxes[i].style.transform = "translateX(-1000px)";
// }

for (let i = 0; i < 2; i++) {
    let box = document.body.appendChild(document.createElement("div"))
    box.classList.add(`box`);
    box.classList.add(`${numBoxShow}`);
    box.style.visibility = "hidden";
    box.appendChild(document.createElement("h2")).innerText = "Content";
    boxes.push(box);
    numBoxShow++;
    if (i%2==0) {
        boxes[i].style.transform = "translateX(1000px)";
    }
    else{
        boxes[i].style.transform = "translateX(-1000px)";
    }
    // if (!timing && window.innerHeight - boxes[boxes.length-1].getBoundingClientRect().bottom >= -100) {
    // }
}
setTimeout(() => {
    for (let i = 0; i < 3; i++) {
        boxes[i].style.transform = "";
        boxes[i].style.visibility = "visible";
        boxes[i].classList.add("active");
    }
}, 250);

let timing = false;

document.addEventListener("wheel",showBoxes);
function showBoxes(dir) {
    if (dir.deltaY > 0.1) {
        if (!timing && window.innerHeight - boxes[boxes.length-1].getBoundingClientRect().bottom >= -100) {
            timing = true;
            let box = document.body.appendChild(document.createElement("div"))
            numBoxShow++;
            box.classList.add(`box`);
            box.classList.add(`${numBoxShow}`);
            box.style.visibility = "hidden";
            box.appendChild(document.createElement("h2")).innerText = "Content";
            if (numBoxShow%2==0) {
                box.style.transform = "translateX(1000px)" ;   
            }
            else{
                box.style.transform = "translateX(-1000px)";
            }
            boxes.push(box);
            
            setTimeout(() => {
                boxes[boxes.length-1].style.transform = ""    
                boxes[boxes.length-1].style.visibility = "visible"    
                boxes[boxes.length-1].classList.add("active");
                timing = false;
            }, 250);
        }
    }
    else if(dir.deltaY < -0.1 && numBoxShow>1){
        if (!timing && window.innerHeight - boxes[boxes.length-1].getBoundingClientRect().bottom < 10) {
            timing = true;
            if (numBoxShow%2==0) {
                boxes[boxes.length-1].style.transform = "translateX(1000px)"    
            }
            else{
                boxes[boxes.length-1].style.transform = "translateX(-1000px)"    
            }
            boxes[boxes.length-1].classList.remove("active");
            numBoxShow--;
            setTimeout(() => {
                document.getElementsByClassName(`${boxes.length-1}`)[0].remove();
                boxes.splice(boxes.length-1);
                timing = false;
                if (window.innerHeight - boxes[boxes.length-1].getBoundingClientRect().bottom < 10) {
                    showBoxes();
                }
            }, 250);
        }
    }
}

