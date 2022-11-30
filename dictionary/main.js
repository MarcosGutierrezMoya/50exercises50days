let word = document.getElementById("word");
let searchBtn = document.getElementById("search");
let wordSearched = document.getElementById("wordPosition");
let meanings = document.getElementById("meanings");

searchBtn.addEventListener("click",searchWord)

function searchWord(){
    if (meanings.childElementCount != 0) {
        for (let i = meanings.childElementCount-1; i >= 0; i--) {
            // for (let e = 0; e < meanings.children[i].childElementCount; e++) {
            //     meanings.children[i].children[e].remove();
            // }
            meanings.children[i].remove();
        }
    }
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
    .then(res=>res.json()).then(dict=>{
        console.log();
        wordSearched.innerText = Object.values(dict)[0].word;
        for (let e = 0; e < Object.values(dict)[0].meanings.length; e++) {
            meanings.appendChild(document.createElement("h5")).innerText = Object.values(dict)[0].meanings[e].partOfSpeech;        
            for (let i = 0; i < Object.values(dict)[0].meanings.length; i++) {
                meanings.appendChild(document.createElement("li")).innerText = Object.values(dict)[0].meanings[i].definitions[0].definition;
            }
        }
    })
    
}