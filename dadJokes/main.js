let btn = document.getElementById("jokeBtn");
btn.addEventListener("click",()=>DadJoke())

async function DadJoke() {
    let api = await fetch("https://icanhazdadjoke.com/slack").then(response => response.json());
    let textJoke = document.getElementById("joke");
    
    textJoke.textContent = api.attachments[0].text
}