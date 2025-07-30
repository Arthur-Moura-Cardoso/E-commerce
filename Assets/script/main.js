import { produtos, adicionarLinkProdutos } from "./modules.js";

let produtosContainer = document.querySelector(".produtos_container")

let renderizarProdutos = () => {
    console.log("AAAPORRA");
    produtos.forEach(produto => {
        produtosContainer.innerHTML += `
            <div class="card_produto" meta-id="${produto.id}">
                <img class="card_produto_img" src="${produto.imagens[0]}" alt="${produto.nome}">
                <div class="card_produto_flex">
                    <div class="card_produto_info">
                        <h3 class="card_produto_nome">${produto.nome}</h3>
                        <img class="card_produto_classificacao" src="Assets/img/estrelas.png" alt="">
                        <button class="card_produto_botao">Comprar</button>
                    </div>
                    <p class="card_produto_valor">R$${produto.valor.toFixed(2)}</p>
                </div> 
        `
    })

    adicionarLinkProdutos();
}

renderizarProdutos()




