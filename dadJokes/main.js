let btn = document.getElementById("jokeBtn");
btn.addEventListener("click",DadJoke)
DadJoke();
async function DadJoke() {
    const config = {headers:{Accept:"text/plain"}}
    let api = await fetch("https://icanhazdadjoke.com/", config).then(response => response.text());
    let textJoke = document.getElementById("joke");
    
    textJoke.textContent = api
}