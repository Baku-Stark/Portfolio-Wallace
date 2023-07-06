// =============================================================================
// SCROLL TOP
let home = document.getElementById('home')
home.click(function(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
// SCROLL TOP
// =============================================================================

// =============================================================================
// MOBILE
class MobileNavbar{
    constructor(mobileMenu, menuClose, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.menuClose = document.querySelector(menuClose);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);

        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            if(link.style.animation = "none"){
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
            else{
                link.style.animation = "none"
            }
        });
    }

    handleClick(){
        this.animateLinks();
        this.navList.classList.add(this.activeClass);
        
        this.menuClose.addEventListener("click", () => {
            this.navList.classList.remove(this.activeClass)
            document.querySelector('body').style.overflowY = 'scroll'
        })
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
        if(window.innerWidth > 1024){
            document.querySelector('body').style.overflowY = 'scroll'
        }
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
    ".mobile-menu.close",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();
// MOBILE
// =============================================================================

// =============================================================================
// SLIDE
var slide300 = {
    distance:  '150%',
    origin: 'left',
    delay: 300,
    duration: 1000,
    opacity: 0
}

var slide500 = {
    distance:  '150%',
    origin: 'left',
    delay: 500,
    duration: 1000,
    opacity: 0
}

var reset ={
    reset: true
}

ScrollReveal().reveal('.slide300', slide300);
ScrollReveal().reveal('.slide500', slide500);
ScrollReveal().reveal('.resetContent', reset);
// SLIDE
// =============================================================================