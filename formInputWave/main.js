
let lettersEmail = document.querySelectorAll(".container>form>div:first-child>label>span");
let inputEmail = document.querySelector(".form-control:first-child>input");
let lettersPassword = document.querySelectorAll(".container>form>div:nth-child(2)>label>span");
let inputPassword = document.querySelector(".form-control:nth-child(2)>input");
let register = document.querySelector("#logIn.text>a");

// register.addEventListener("click",()=>)

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