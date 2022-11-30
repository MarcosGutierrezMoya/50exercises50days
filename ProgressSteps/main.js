//Butons section
let btnNext = document.getElementById("next");
btnNext.addEventListener("click",nextStep);
let btnPrev = document.getElementById("prev");
btnPrev.addEventListener("click",prevStep);
//Bar section
let progressBar = document.getElementById("myBar");
let percentage = 0;
//Circles section

let circles = document.getElementsByClassName("circle");
let numCircle = 0;

function nextStep() {
    btnPrev.disabled = false;
    btnPrev.classList.remove("disabled")
    percentage += 33;
    numCircle++;
    circles[numCircle].classList.add("active")
    progressBar.style.width = (percentage + "%");
    if (percentage > 90) {
        btnNext.disabled = true;
        btnNext.classList.add("disabled")
    }
}

function prevStep() {
    btnNext.classList.remove("disabled")
    btnNext.disabled = false;
    percentage -= 33;
    progressBar.style.width = (percentage + "%");
    circles[numCircle].classList.remove("active")
    numCircle--;
    if (percentage == 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add("disabled")
    }
}