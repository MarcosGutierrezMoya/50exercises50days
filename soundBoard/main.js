let audios = document.getElementsByTagName("audio");

for (let i = 0; i < audios.length; i++) {
    let btnAudio = document.getElementById("buttons").appendChild(document.createElement("button"))
    btnAudio.innerText = audios[i].id.toString();
    btnAudio.classList = ("btn");
    btnAudio.addEventListener("click",()=>audios[i].play())
}