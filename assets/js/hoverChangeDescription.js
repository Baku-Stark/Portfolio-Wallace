function hoverChangeDescription(nameCard, lang, text){
    var language = document.querySelector('.lang');
    var changeDescription = document.querySelector('.description-text')

    document.querySelector(nameCard).addEventListener("click", () => {
        language.innerText = lang;
        changeDescription.innerText = text;
    })
}

hoverChangeDescription(
    "#python",
    "Python [Course: 100%] ",
    "* Python é uma linguagem de programação amplamente usada em aplicativos web, Desenvolvimento de Software, Data Science e Machine Learning."
);

hoverChangeDescription(
    "#typescript",
    "TypeScript [Course: 100%] ",
    "* TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."
);

hoverChangeDescription(
    "#cpp",
    "C++ [Course: 100%] ",
    "* C++ é uma linguagem de programação compilada multiparadigma de uso geral."
);

hoverChangeDescription(
    "#c",
    "C [Course: 100%] ",
    "* C linguagem muito popular na criação de Sistemas Operacionais, como o Linux."
);

hoverChangeDescription(
    "#javascript",
    "JavaScript [Course: 100%] ",
    "* JavaScript é uma linguagem de programação estruturada, de script de alto nível, fracamente tipada dinamicamente e interpretada por multiparadigma. Junto com HTML e CSS, JavaScript é uma das três principais tecnologias da World Wide Web (WWW)."
);

hoverChangeDescription(
    "#java",
    "Java [Course: 100%] ",
    "* Java é uma linguagem multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si mesma. É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicativos móveis e software empresarial até aplicativos de big data e tecnologias de servidor."
);

hoverChangeDescription(
    "#mkd",
    "MarkDown [Course: 100%]",
    "* Markdown é um formato de marcação simples, ou seja, marcação de texto. A ideia é marcar texto informando o que é importante, o que é tópico, o que são links e imagens, sem a necessidade de usar marcações mais complexas, como HTML. É um formato bem trivial."
);

hoverChangeDescription(
    "#rust",
    "Rust [Course: 50%]",
    "* Rust é uma linguagem de programação multiparadigma compilada desenvolvida pela Mozilla Research. Ela é projetada para ser segura, competitiva e prática."
);

hoverChangeDescription(
    "#ruby",
    "Ruby [Course: 10%]",
    "* Ruby é uma linguagem de programação popular e de propósito geral. Você pode ter ouvido falar dela em conexão com Ruby on Rails, um dos frameworks de desenvolvimento web mais populares em qualquer linguagem de programação."
);

hoverChangeDescription(
    "#html",
    "Html [Course: 100%]",
    "* O HTML5 é responsável por criar a estrutura de um site (um componente extremamente importante)."
);

hoverChangeDescription(
    "#css",
    "Css [Course: 100%]",
    "* CSS3 serve para estilização de um site, utilizando-se das referêcias (class e id's) para alterar os componentes."
);

hoverChangeDescription(
    "#bstrap",
    "BootStrap [Course: 100%]",
    "* Bootstrap é um framework web de código aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, utilizando HTML, CSS e JavaScript, baseado em modelos de design para tipografia, melhorando a experiência do usuário em um site amigável e responsivo."
);

hoverChangeDescription(
    "#twind",
    "Tailwind [Course: 100%]",
    "* Tailwind CSS é um framework CSS de código aberto. O principal recurso desta biblioteca é que, diferente de outros frameworks CSS como Bootstrap."
);

hoverChangeDescription(
    "#sass",
    "Sass [Course: 100%]",
    "* SASS é uma extensão para impulsionar a escrita CSS3."
);

hoverChangeDescription(
    "#react",
    "React [Course: 100%]",
    "* React é uma biblioteca front-end JavaScript de código aberto focada na criação de interfaces de usuário em páginas da web."
);

hoverChangeDescription(
    "#vuejs",
    "Vue [Course: 100%]",
    "* VueJS é um framework JavaScript de código aberto focado no desenvolvimento de interfaces de usuário e aplicativos de página única."
);

hoverChangeDescription(
    "#angular",
    "Angular [Course: 100%]",
    "* AngularJS é um conjunto de ferramentas para construir o framework mais adequado ao desenvolvimento do seu aplicativo. Ele é totalmente extensível e funciona bem com outras bibliotecas."
);

hoverChangeDescription(
    "#flask",
    "Flask [Course: 100%]",
    "* Flask é um pequeno framework web escrito em Python. Ele é classificado como um microframework porque não requer ferramentas ou bibliotecas específicas, mantendo um núcleo simples, mas extensível."
);

hoverChangeDescription(
    "#django",
    "Django [Course: 100%]",
    "* Django é um framework web Python de alto nível que incentiva o desenvolvimento rápido e o design limpo e pragmático."
);

hoverChangeDescription(
    "#mysql",
    "MySQL [Course: 100%]",
    "* MySQL é um sistema de gerenciamento de banco de dados que usa a linguagem SQL como interface. Atualmente, é um dos sistemas de gerenciamento de banco de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações no mundo todo."
);

hoverChangeDescription(
    "#postgresql",
    "PostgreSQL [Course: 100%]",
    "* PostgreSQL é um banco de dados objeto-relacional de código aberto."
);

hoverChangeDescription(
    "#sqlite",
    "SQLite [Course: 100%]",
    "* SQLite é uma biblioteca de linguagem C que implementa um banco de dados SQL incorporado. Programas que usam a biblioteca SQLite podem acessar o banco de dados SQL sem executar um processo DBMS separado."
);

hoverChangeDescription(
    "#mongodb",
    "MongoDB [Course: 100%]",
    "* MongoDB é um software de banco de dados multiplataforma, gratuito, de código aberto, orientado a documentos, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas."
);

hoverChangeDescription(
    "#adonis",
    "Adonis [Course: 100%]",
    "* AdonisJS é um framework web TypeScript-first para construir aplicativos web e servidores de API. Ele vem com suporte para testes, ferramentas modernas, um ecossistema de pacotes oficiais e muito mais."
);

hoverChangeDescription(
    "#express",
    "Express [Course: 100%]",
    "* Express.js é um framework para Node.js que fornece recursos mínimos para construir servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos frameworks de servidor Node.js mais populares."
);

hoverChangeDescription(
    "#axios",
    "Axios [Course: 100%]",
    "* Axios é um cliente HTTP simples baseado em promessas para o navegador e node.js. Axios fornece uma biblioteca simples de usar em um pequeno pacote com uma interface muito extensível."
);

hoverChangeDescription(
    "#vite",
    "Vite [Course: 100%]",
    "* Vite é um servidor de desenvolvimento local escrito por Evan You, o criador do Vue.js, e usado por padrão para Vue e para modelos de projeto React. Ele tem suporte para TypeScript e JSX. Ele usa Rollup e esbuild internamente para empacotamento."
);