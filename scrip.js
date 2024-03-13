"use strict"

// show menu
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");
  
if(navToggle){
      navToggle.addEventListener("click",()=> navMenu.classList.add("show-menu"))
}


if(navClose){
      navClose.addEventListener("click",()=> navMenu.classList.remove("show-menu"))

}
    


// remove menu mobile

const navLink= document.querySelectorAll(".nav__link");

const linkActivation = () =>{
      
      navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click" , linkActivation))

// change class header when window.scrollY => 0

const scrollHeader = () =>{
      const header = document.getElementById("header");

      window.scrollY >= 10 ? header.classList.add("bg-header")
                         :header.classList.remove("bg-header")
}


window.addEventListener("scroll",scrollHeader)

// scroll button

const scrollup = e =>{
      const scrollButtom  = document.getElementById("scroll-up");

      window.scrollY >= 350 ? scrollButtom.classList.add("show-scroll")
      :scrollButtom.classList.remove("show-scroll")
}

window.addEventListener("scroll",scrollup)

const  themeButton = document.getElementById("theme-button");
const darkTheme ="dark-theme";
const  iconTheme = "fa-sun";

const  selectedTheme = localStorage.getItem("select-theme");
const selectedIcon =localStorage.getItem("selected-icon");

const getCurrentTheme = ()  => document.body.classList.contains(darkTheme) ? "dark " : "light";

const  getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun"

if(selectedTheme){
      document.body.classList[selectedTheme === "dark" ? "add" :"remove"](darkTheme)
      
      themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](iconTheme)
}


themeButton.addEventListener("click",()=>{
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)

      localStorage.setItem("selected-theme",getCurrentTheme());
      localStorage.setItem("selected-icon",getCurrentIcon())
})


// scroll reveal librery

const  sr = ScrollReveal({
      origin : "top",
      distance : "60px",
      duration  : 2500,
      delay : 400
})

sr.reveal(".home__img,  .newsletter__container , .footer__logo, .footer__description, .footer__content, .footer__info")
sr.reveal(".home__data" ,{origin: "bottom"})
sr.reveal(".about__data, .recently__data" ,{origin: "left"})
sr.reveal(".about__img, .recently__img" ,{origin: "right"})
sr.reveal(".popular__card" ,{interval: 100})
