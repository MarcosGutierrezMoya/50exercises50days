let audios = document.getElementsByTagName("audio");

for (let i = 0; i < audios.length; i++) {
    let btnAudio = document.getElementById("buttons").appendChild(document.createElement("button"))
    btnAudio.innerText = audios[i].id;
    btnAudio.classList = ("btn");
    btnAudio.addEventListener("click",()=>{ 
        for (let e = 0; e < audios.length; e++) {
            if (audios[i].id == audios[e].id) {
                if(audios[i].currentTime == 0){audios[i].play()}
                else{audios[i].pause();
                audios[i].currentTime = 0;}
            }
            else{audios[e].pause();
                audios[e].currentTime = 0;}
        }
    })
}