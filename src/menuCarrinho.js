import { catalogo } from "./utilidades";

const idsProdutoCarrinhoQuantidade = {};

function abrirCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[-360px]");
    document.getElementById("carrinho").classList.add("right-[0px]");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fecharCarrinho");
    const botaoAbrirCarrinho = document.getElementById("abrirCarrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

function removerDoCarrinho(idProduto) {
    delete idsProdutoCarrinhoQuantidade[idProduto];
    renderizarProdutosCarrinho();
}

function incrementarQuantidade(idProduto) {
    idsProdutoCarrinhoQuantidade[idProduto]++;
    atualizarQuantidade(idProduto);
}

function decrementarQuantidade(idProduto) {
    if (idsProdutoCarrinhoQuantidade[idProduto] === 1) {
        removerDoCarrinho(idProduto);
        return;
    }
    idsProdutoCarrinhoQuantidade[idProduto]--;
    atualizarQuantidade(idProduto);
}

function atualizarQuantidade(idProduto) {
    document.getElementById(`quantidade${idProduto}`).innerText =
        idsProdutoCarrinhoQuantidade[idProduto];
}

function desenharProdutoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho =
        document.getElementById("produtosCarrinho");

    const elementoArticle = document.createElement("article");
    const articleClasses = [
        "flex",
        "bg-slate-100",
        "rounded-lg",
        "p-1",
        "relative",
    ];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }

    const cardProdutoCarrinho = `
        <button id="removerItem${produto.id}" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
        <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${
        produto.nome
    }" class="h-24 rounded-lg">
        <div class="p-2 flex flex-col justify-between">
            <p class="text-slate-900 text-sm">${produto.nome}</p>
            <p class="text-slate-400 text-xs">Tamanho: M</p>
            <p class="text-green-400 text-lg">$${produto.preco}</p>
        </div>
        <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
            <button id="decrementarProduto${produto.id}">-</button>
            <p id="quantidade${produto.id}" class="ml-2">${
        idsProdutoCarrinhoQuantidade[produto.id]
    }</p>
            <button id="incrementarProduto${produto.id}" class="ml-2">+</button>
        </div>`;

    elementoArticle.innerHTML = cardProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);

    document
        .getElementById(`incrementarProduto${produto.id}`)
        .addEventListener("click", () => incrementarQuantidade(produto.id));

    document
        .getElementById(`decrementarProduto${produto.id}`)
        .addEventListener("click", () => decrementarQuantidade(produto.id));

    document
        .getElementById(`removerItem${produto.id}`)
        .addEventListener("click", () => removerDoCarrinho(produto.id));
}

function renderizarProdutosCarrinho() {
    const containerProdutosCarrinho =
        document.getElementById("produtosCarrinho");
    containerProdutosCarrinho.innerHTML = "";

    for (const idProduto in idsProdutoCarrinhoQuantidade) {
        desenharProdutoCarrinho(idProduto);
    }
}

export function adicionarAoCarrinho(idProduto) {
    if (idProduto in idsProdutoCarrinhoQuantidade) {
        incrementarQuantidade(idProduto);
        return;
    }

    idsProdutoCarrinhoQuantidade[idProduto] = 1;
    desenharProdutoCarrinho(idProduto);
}
