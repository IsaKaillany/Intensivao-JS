import { renderizarCatalogo } from "./src/cardProduto";
import {
    atualizarPrecoCarrinho,
    inicializarCarrinho,
    renderizarProdutosCarrinho,
} from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
