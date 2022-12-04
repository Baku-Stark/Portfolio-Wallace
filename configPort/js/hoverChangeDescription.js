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