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
    "[CURSO: 100%] * HTML5 é responsável por criar a estrutura de um site (componente importante)."
);

hoverChangeDescription(
    "#css",
    "[CURSO: 100%] * CSS serve para estilizar o site."
);

hoverChangeDescription(
    "#bootstrap",
    "[CURSO: 100%] * Framework de CSS que serve como atalho para responsividade do site."
);

hoverChangeDescription(
    "#sass",
    "[CURSO: 100%] * SASS é uma extensão de código, servindo para turbinar as CSS."
);

hoverChangeDescription(
    "#javascript",
    "[CURSO: 100%] * JavaScript é uma linguagem de programação multi-uso, mas utilizo na área de desenvolvimento Front-End"
);

hoverChangeDescription(
    "#python",
    "[CURSO: 100%] * Python é uma linguagem de programção Back-End. Uma excelente escolha para novatos."
);

hoverChangeDescription(
    "#markdown",
    "[CURSO: 100%] * MarkDown é uma linguagem de progrmação para estilização e formatação textual."
)

hoverChangeDescription(
    "#git-plain",
    "[CURSO: 100%] * Git é um software de controle distruibuído. No caminho para manipular o Git por completo."
)

hoverChangeDescription(
    "#java",
    "[CURSO: 90%] * Realizando projetos em Java (melhorias em breve no portfolio no Git Hub)."
)

hoverChangeDescription(
    "#cpp",
    "[CURSO: 10%] * C++ ."
)

hoverChangeDescription(
    "#rust",
    "[CURSO: 10%] * Rust."
)