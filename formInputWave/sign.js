let lettersName = document.querySelectorAll(".container>form>div:first-child>label>span");
let inputName = document.querySelector(".form-control:first-child>input");
let lettersEmail = document.querySelectorAll(".container>form>div:nth-child(2)>label>span");
let inputEmail = document.querySelector(".form-control:nth-child(2)>input");
let lettersPassword = document.querySelectorAll(".container>form>div:nth-child(3)>label>span");
let inputPassword = document.querySelector(".form-control:nth-child(3)>input");

inputName.addEventListener("focus",addName);
function addName() {
    for (let i = 0; i < lettersName.length; i++) {
        lettersName[i].classList.add("active");
        inputName.classList.add("active")
    }
}

inputName.addEventListener("focusout",removeName);
function removeName() {
    if (inputName.value == "") {
        for (let i = 0; i < lettersName.length; i++) {
            lettersName[i].classList.remove("active");
            inputName.classList.remove("active")
        }
    }
}
inputEmail.addEventListener("focus",addEmail);
function addEmail() {
    for (let i = 0; i < lettersEmail.length; i++) {
        lettersEmail[i].classList.add("active");
        inputEmail.classList.add("active")
    }
}

inputEmail.addEventListener("focusout",removeEmail);
function removeEmail() {
    if (inputEmail.value == "") {
        for (let i = 0; i < lettersEmail.length; i++) {
            lettersEmail[i].classList.remove("active");
            inputEmail.classList.remove("active")
        }
    }
}

inputPassword.addEventListener("focus",addPassword);
function addPassword() {
    for (let i = 0; i < lettersPassword.length; i++) {
        lettersPassword[i].classList.add("active");
        inputPassword.classList.add("active")
    }
}

inputPassword.addEventListener("focusout",removePassword);
function removePassword() {
    if (inputPassword.value == "") {
        for (let i = 0; i < lettersPassword.length; i++) {
            lettersPassword[i].classList.remove("active");
            inputPassword.classList.remove("active")
        }
    }
}

let lettersPassword2 = document.querySelectorAll(".container>form>div:nth-child(4)>label>span");
let inputPassword2 = document.querySelector(".form-control:nth-child(4)>input");

inputPassword2.addEventListener("focus",addPassword2);
function addPassword2() {
    for (let i = 0; i < lettersPassword2.length; i++) {
        lettersPassword2[i].classList.add("active");
        inputPassword2.classList.add("active")
    }
}

inputPassword2.addEventListener("focusout",removePassword2);
function removePassword2() {
    if (inputPassword2.value == "") {
        for (let i = 0; i < lettersPassword2.length; i++) {
            lettersPassword2[i].classList.remove("active");
            inputPassword2.classList.remove("active")
        }
    }
}