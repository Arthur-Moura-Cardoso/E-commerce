let imagemPrincipalContainer = document.querySelector('.produto_img_principal');
let imagensSegundariasContainer = document.querySelector('.produto_mini_imgs');
let produtoNomeContainer = document.querySelector('.produto_nome');
let produtoValorContainer = document.querySelector('.produto_valor');
let produtoParceladoContainer = document.querySelector('.produto_parcelado_valor');
let produtoDescricaoContainer = document.querySelector('.produto_descricao');

let renderizarProduto = () => {
    let produto = localStorage.getItem('produtoSelecionado');
    produto = JSON.parse(produto);
    let produtoNome = produto.nome;
    let produtoValor = produto.valor;
    let produtoImagem = produto.imagem;
    let produtoDescricao = produto.descricao;

    let valorParcelado = produtoValor / 10;

    produtoNomeContainer.textContent = produtoNome;
    produtoValorContainer.textContent = `R$${produtoValor.toFixed(2)}`;
    produtoParceladoContainer.textContent = `R$${produtoValor.toFixed(2)} em até 12x de R$${(produtoValor / 12).toFixed(2)}`;
    imagemPrincipalContainer.src = produtoImagem;
    produtoDescricaoContainer.textContent = produtoDescricao;
}

renderizarProduto();