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

// =============================================================================
// EVENTOS DE DESCRIÇÃO
function hoverChangeDescription(nameCard, text){
    var changeDescription = document.querySelector('.res')

    document.querySelector(nameCard).addEventListener("mouseover", () => {
        changeDescription.innerText = text
    })

    document.querySelector(nameCard).addEventListener("mouseout", () => {
        changeDescription.innerText = `*Passe o mouse ou clique em alguma insígnia.`
    })
}

hoverChangeDescription(
    "#html",
    "[HABILIDADE: 70%]"
);

hoverChangeDescription(
    "#css",
    "[HABILIDADE: 70%]"
);

hoverChangeDescription(
    "#bootstrap",
    "[HABILIDADE: 70%]"
);

hoverChangeDescription(
    "#sass",
    "[HABILIDADE: 70%]"
);

hoverChangeDescription(
    "#javascript",
    "[HABILIDADE: 50%]"
);

hoverChangeDescription(
    "#python",
    "[HABILIDADE: 90%]"
);

hoverChangeDescription(
    "#markdown",
    "[HABILIDADE: 90%]"
)

hoverChangeDescription(
    "#git-plain",
    "[HABILIDADE: 10%]"
)
// EVENTOS DE DESCRIÇÃO
// =============================================================================