const nav = document.querySelector("nav")
const mobilenav = document.querySelector("nav.mobilenavbar")
const menuicon = document.querySelector(".menuicon")
const closebtn = document.querySelector(".mobilemenu .closebtn")
const mobilemenu = document.querySelector(".mobilemenu")

window.addEventListener("scroll", (event) => {
    console.log("value of pageYOffset", window.pageYOffset);
    if (window.pageYOffset > 60) {

        nav.classList.add("scrolled")
        mobilenav.classList.add("scrolled")
    }
    else {
        nav.classList.remove("scrolled")
        mobilenav.classList.remove("scrolled")
    }

})

menuicon.addEventListener('click', () => {
    mobilemenu.classList.add("active")
})

closebtn.addEventListener('click', () => {
    mobilemenu.classList.remove("active")
})