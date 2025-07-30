import { produtos, adicionarLinkProdutos } from "./modules.js";

function renderizarProduto() {
    let produtoNomeContainer = document.querySelector('.produto_nome');
    let produtoValorContainer = document.querySelector('.produto_valor');
    let produtoParceladoContainer = document.querySelector('.produto_parcelado_valor');
    let produtoDescricaoContainer = document.querySelector('.produto_descricao');
    let produto = receberProdutos()
    
    produtoNomeContainer.textContent = produto.produtoNome;
    produtoValorContainer.textContent = `R$${produto.produtoValor.toFixed(2)}`;
    produtoParceladoContainer.textContent = `R$${produto.produtoValor.toFixed(2)} em até 12x de R$${(produto.produtoValor / 12).toFixed(2)}`;
    produtoDescricaoContainer.textContent = produto.produtoDescricao;

    adicionarimagens(produto.produtoImagem);
    adicionarProdutoSimilares(produtos, produto.produtoId);

}

renderizarProduto();

function receberProdutos() {
    let produto = localStorage.getItem('produtoSelecionado');
    produto = JSON.parse(produto);
    
    let produtoId = produto.id;
    let produtoNome = produto.nome;
    let produtoValor = produto.valor;
    let produtoImagem = produto.imagens;
    let produtoDescricao = produto.descricao;

    return {
        produtoId,
        produtoNome,
        produtoValor,
        produtoImagem,
        produtoDescricao
    };
}
    

function adicionarimagens(imagens) {
    let imagemPrincipalContainer = document.querySelector('.produto_img_principal');
    let miniImagensContainer = document.querySelector('.produto_mini_imgs');

    imagemPrincipalContainer.src = imagens[0];

    for (let i = 0; i < miniImagensContainer.children.length; i++) {
        miniImagensContainer.children[i].src = imagens[i]; 
    }

    let miniImagens = document.querySelectorAll('.mini_img');

    miniImagens.forEach((miniImagem) => {
        miniImagem.addEventListener('click', () => {
            imagemPrincipalContainer.src = miniImagem.src;
        });
    });
}

function adicionarProdutoSimilares(produtos, idProdutoAtual) {
    let produtosContainer = document.querySelector('.produtos_container');
    let tamanhoContainer = 4;
    
    for (let i = 0; produtosContainer.children.length < tamanhoContainer; i++) {
        let cardProduto = document.createElement('div');
        cardProduto.classList.add('card_produto');
        cardProduto.setAttribute('meta-id', produtos[i].id);
        
        if (produtos[i].id === idProdutoAtual) {
            i++;
        }
    
        cardProduto.innerHTML = `
            <img class="card_produto_img" src="${produtos[i].imagens[0]}" alt="${produtos[i].nome}">
            <div class="card_produto_flex">
                <div class="card_produto_info">
                    <h3 class="card_produto_nome">${produtos[i].nome}</h3>
                    <img class="card_produto_classificacao" src="Assets/img/estrelas.png" alt="">
                    <button class="card_produto_botao">Comprar</button>
                </div>
                <p class="card_produto_valor">R$${produtos[i].valor.toFixed(2)}</p>
            </div>
        `;

        produtosContainer.appendChild(cardProduto);
    };

    adicionarLinkProdutos();
}