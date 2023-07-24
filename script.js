const nav = document.querySelector("nav")

window.addEventListener("scroll", (event) => {
    console.log("value of pageYOffset", window.pageYOffset);
    if (window.pageYOffset > 60) {

        nav.classList.add("scrolled")
    }
    else {
        nav.classList.remove("scrolled")
    }

})