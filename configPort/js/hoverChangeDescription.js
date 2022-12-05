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
    "[HABILIDADE: 70%] * HTML5 é responsável por criar a estrutura de um site (componente importante)."
);

hoverChangeDescription(
    "#css",
    "[HABILIDADE: 70%] * CSS serve para estilizar o site."
);

hoverChangeDescription(
    "#bootstrap",
    "[HABILIDADE: 70%] * Framework de CSS que serve como atalho para responsividade do site."
);

hoverChangeDescription(
    "#sass",
    "[HABILIDADE: 70%] * SASS é uma extensão de código, servindo para turbinar as CSS."
);

hoverChangeDescription(
    "#javascript",
    "[HABILIDADE: 50%] * JavaScript é uma linguagem de programação multi-uso, mas utilizo na área de desenvolvimento Front-End"
);

hoverChangeDescription(
    "#python",
    "[HABILIDADE: 90%] * Python é uma linguagem de programção Back-End. Uma excelente escolha para novatos."
);

hoverChangeDescription(
    "#markdown",
    "[HABILIDADE: 100%] * MarkDown é uma linguagem de progrmação para estilização e formatação textual."
)

hoverChangeDescription(
    "#git-plain",
    "[HABILIDADE: 45%] * Git é um software de controle distruibuído. No caminho para manipular o Git por completo."
)