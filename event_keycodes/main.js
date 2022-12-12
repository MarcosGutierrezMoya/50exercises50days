const insert = document.getElementById("insert");
const action = document.getElementsByClassName("key")[0];

document.addEventListener('keydown',(function(event){
    action.remove();
    insert.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const divParent = insert.appendChild(document.createElement("div"));
        divParent.classList.add("parent"); 
        switch (i) {
            case 0:
                const keySection = divParent.appendChild(this.createElement("p"));
                keySection.innerText = "event.key";
                keySection.classList.add("text");
                const key = divParent.appendChild(document.createElement("div"));
                key.classList.add("box");
                key.innerText = event.key;
                break;
            case 1:
                const keyCodeSection = divParent.appendChild(this.createElement("p"));
                keyCodeSection.innerText = "event.keyCode";
                keyCodeSection.classList.add("text");
                const keyCode = divParent.appendChild(document.createElement("div"));
                keyCode.classList.add("box");
                keyCode.innerText = event.key.codePointAt();
                break;
            case 2:
                const codeSection = divParent.appendChild(this.createElement("p"));
                codeSection.innerText = "event.code";
                codeSection.classList.add("text");;
                const code = divParent.appendChild(document.createElement("div"));
                code.classList.add("box");
                code.innerText = event.code;                
                break;
        }        
    }
}))