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

export function adicionarAoCarrinho() {
    const containerProdutosCarrinho = document.getElementById("produtosCarrinho");
    const cardProdutoCarrinho = `
    <article class="flex bg-slate-100 rounded-lg p-1 relative">
        <button id="fecharCarrinho" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
        <img src="./assets/img/product-1.jpg" alt="Carrinho: Camisa Larga com Bolsos" class="h-24 rounded-lg">
        <div class="py-2">
            <p class="text-slate-900 text-sm">Camisa Larga com Bolsos</p>
            <p class="text-slate-400 text-xs">Tamanho: M</p>
            <p class="text-green-400 text-lg">$70</p>
        </div>
    </article>`;

    containerProdutosCarrinho.innerHTML += cardProdutoCarrinho;
}
