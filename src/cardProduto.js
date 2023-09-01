import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `
            <div id="cardProduto${produtoCatalogo.id}" class="border-solid border-2 border-sky-500 w-48 m-2">
                <img src="./assets/img/${produtoCatalogo.imagem}" style="height: 300px" alt="Produto 1">
                <p class="marca">${produtoCatalogo.marca}</p>
                <p>${produtoCatalogo.nome}</p>
                <p>$${produtoCatalogo.preco}</p>
                <button>Adicionar</button>
            </div>`;

    document.getElementById("containerProduto").innerHTML += cartaoProduto;
    }
}
