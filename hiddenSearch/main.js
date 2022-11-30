let input = document.getElementsByClassName("input")[0];
let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("mousedown",occult);

function occult(event) {
    // switch (event.which) {
    //     case 1:
    //         input.classList.add("occultInput");
    //         break;
    //     case 3:
    //         input.classList.remove("occultInput");
    //     break;
    //     default:
    //         break;
    // }
    if (!input.classList.contains("occultInput")) {
        input.classList.add("occultInput");
    }
    else{
        input.classList.remove("occultInput");
    }
}