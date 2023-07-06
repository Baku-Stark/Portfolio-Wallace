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
    "[APRENDIZADO: 100%] * HTML5 é responsável por criar a estrutura de um site (componente importante)."
);

hoverChangeDescription(
    "#css",
    "[APRENDIZADO: 100%] * CSS serve para estilizar o site."
);

hoverChangeDescription(
    "#bootstrap",
    "[APRENDIZADO: 100%] * Framework de CSS que serve como atalho para responsividade do site."
);

hoverChangeDescription(
    "#sass",
    "[APRENDIZADO: 100%] * SASS é uma extensão de código, servindo para turbinar as CSS."
);

hoverChangeDescription(
    "#javascript",
    "[APRENDIZADO: 100%] * JavaScript é uma linguagem de programação multi-uso, mas utilizo na área de desenvolvimento Front-End"
);

hoverChangeDescription(
    "#python",
    "[APRENDIZADO: 100%] * Python é uma linguagem de programção Back-End. Uma excelente escolha para novatos."
);

hoverChangeDescription(
    "#markdown",
    "[APRENDIZADO: 100%] * MarkDown é uma linguagem de progrmação para estilização e formatação textual."
)

hoverChangeDescription(
    "#git-plain",
    "[APRENDIZADO: 100%] * Git é um software de controle distruibuído. No caminho para manipular o Git por completo."
)

hoverChangeDescription(
    "#java",
    "[APRENDIZADO: 90%] * Realizando projetos em Java (melhorias em breve no portfolio no Git Hub)."
)

hoverChangeDescription(
    "#cpp",
    "[APRENDIZADO: 10%] * C++ ."
)

hoverChangeDescription(
    "#rust",
    "[APRENDIZADO: 10%] * Rust."
)