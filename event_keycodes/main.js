const insert = document.getElementById("insert");
const action = document.getElementsByClassName("key")[0];

document.addEventListener('keydown',(function(event){
    action.remove();
    insert.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const divParent = insert.appendChild(document.createElement("div"));
        divParent.classList.add("parent"); 
        const text = divParent.appendChild(this.createElement("p"));
        const key = divParent.appendChild(document.createElement("div"));
        switch (i) {
            case 0:
                text.innerText = "event.key";
                text.classList.add("text");

                key.classList.add("box");
                key.innerText = event.key;
                break;
            case 1:
                text.innerText = "event.keyCode";
                text.classList.add("text");

                key.classList.add("box");
                key.innerText = event.which;
                break;
            case 2:
                text.innerText = "event.code";
                text.classList.add("text");
                
                key.classList.add("box");
                key.innerText = event.code;                
                break;
        }        
    }
}))