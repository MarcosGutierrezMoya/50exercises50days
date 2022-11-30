let images = document.getElementsByClassName("split");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseenter",function(){images[i].classList.add("active")})
    images[i].addEventListener("mouseleave",function(){images[i].classList.remove("active")})
}