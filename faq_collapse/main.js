let openBtn = document.getElementsByClassName("fa-chevron-down");
console.log(openBtn);

for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click',(event)=>{
        if (event.target.classList.contains("fa-times")) {
            event.target.parentElement.previousSibling.previousSibling.classList.remove("activeText");
            event.target.parentElement.parentElement.classList.remove("active");
            event.target.classList.remove("fa-times");
            event.target.classList.add("fa-chevron-down");
        }
        else{
            event.target.parentElement.previousSibling.previousSibling.classList.add("activeText");
            event.target.parentElement.parentElement.classList.add("active");
            event.target.classList.add("fa-times");
            event.target.classList.remove("fa-chevron-down");
        }
        
    });
}
