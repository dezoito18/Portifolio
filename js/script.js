const projetos = [
    {
        titulo: "School Management System",
        descricao: "Sistema de gerenciamento escolar executado no console, desenvolvido em C. Permite organizar turmas, cadastrar alunos, controlar matrículas e registrar notas, reunindo em um só programa as rotinas básicas de uma secretaria escolar. O projeto me ajudou a praticar a divisão do código em funções, a manipulação de dados e a organização de um programa maior, com várias funcionalidades.",
        tecnologias: ["C"],
        link: "https://github.com/dezoito18/School-Management-System-C"
    },
    {
        titulo: "Jogo da Velha",
        descricao: "Versão do clássico jogo da velha feita em C, para ser jogada no terminal. Foi um dos meus primeiros projetos maiores e serviu para praticar lógica de programação, estruturas de controle, funções e a organização do código em partes pequenas. Nele aprendi a pensar nas regras do jogo, como verificar vitória e empate, e a transformá-las em código.",
        tecnologias: ["C"],
        link: "https://github.com/dezoito18/Jogo-da-Velha-em-C"
    },
    {
        titulo: "Petshop PetDog",
        descricao: "Site institucional de um petshop fictício, a PetDog, criado somente com HTML e CSS. Foi um projeto de estudo para praticar a estrutura de uma página, o posicionamento dos elementos, as cores e o visual do site. Foi meu primeiro contato com o desenvolvimento web, e a base para os projetos com JavaScript que estou construindo agora.",
        tecnologias: ["HTML", "CSS"],
        link: "https://github.com/dezoito18/projeto-Petshop"
    }
    
];
const icones = {
    C: "img/icons/C.png",
    HTML: "img/icons/HTML.png",
    CSS: "img/icons/CSS.png"
};
const container = document.querySelector(".cards");

function mostrarProjetos(lista) {
    container.innerHTML = "";
    lista.forEach(function (p) {
    const iconesHTML = p.tecnologias
        .map(t => icones[t]
            ? `<img src="${icones[t]}" alt="${t}" title="${t}" class="icone">`
            : "")
        .join("");
        const card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `
            <h2>${p.titulo}</h2>
            <p>${p.descricao}</p>
            <div class="icones">${iconesHTML}</div>
            <div class="links">
                <a href="${p.link}" target="_blank">Código</a>
            </div>
        `;
        container.appendChild(card);
    });
}

mostrarProjetos(projetos);

const botoes = document.querySelectorAll(".filtros button");

botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const filtro = botao.dataset.filtro;

        botoes.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        if (filtro === "todos") {
            mostrarProjetos(projetos);
        } else {
            const filtrados = projetos.filter(p => p.tecnologias.includes(filtro));
            mostrarProjetos(filtrados);
        }
    });
});