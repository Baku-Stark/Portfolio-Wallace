// SLIDE
var slideUp = {
    delay: 300,
    duration: 1000,
    reset: true,
    opacity: 0
}

var slideContent = {
    delay: 500,
    duration: 1000,
    reset: true,
    opacity: 0
}

ScrollReveal().reveal('.astro', slideUp);
ScrollReveal().reveal('.title-1', slideUp);
ScrollReveal().reveal('.content-container', slideContent)
ScrollReveal().reveal('.content-container-projects', slideContent)

// EVENTOS
document.querySelector('p.res').onmouse

// MOBILE
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }


    handleClick(){
        this.animateLinks();
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();