let keys = document.getElementsByClassName("key");
let sounds = document.getElementsByClassName("sound");

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click",function(){
        keys[i].querySelector("audio").play();
    })
    document.addEventListener("keydown", function(sound) {
        if (sound.key == keys[i].getAttribute("data-key")) {
            keys[i].querySelector("audio").play();
        }
    })
}