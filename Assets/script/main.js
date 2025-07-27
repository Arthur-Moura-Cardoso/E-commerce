let produtos = [
    {
        id: 1,
        imagem: "https://media.istockphoto.com/id/178716575/pt/foto/dispositivos-m%C3%B3veis.jpg?s=612x612&w=0&k=20&c=GXwN-2r9TZ2-do8-Wg4bBnoahNIpAIvSoO1Dtt69E7w=",
        nome: "Produto 1",
        valor: 29.99,
        descricao: "Produto básico ideal para uso diário com excelente custo-benefício."
    },
    {
        id: 2,
        imagem: "https://contigo.com.br/media/uploads/legacy/2020/06/22/7-aparelhos-eletronicos-ideais-para-voce-ter-em-casa-1247773.png",
        nome: "Produto 2",
        valor: 39.99,
        descricao: "Design moderno e funcionalidades essenciais para o seu dia a dia."
    },
    {
        id: 3,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GkDcbY_WrNTcCCzvwOICWFGEXu6OxLgdGA&s",
        nome: "Produto 3",
        valor: 49.99,
        descricao: "Alta durabilidade e desempenho superior por um preço acessível."
    },
    {
        id: 4,
        imagem: "https://cdn.awsli.com.br/2500x2500/2537/2537139/produto/240077027/vvcv-2rj8krlaf2.png",
        nome: "Produto 4",
        valor: 59.99,
        descricao: "Perfeito para quem busca qualidade sem abrir mão da economia."
    },
    {
        id: 5,
        imagem: "https://img.br.my-best.com/product_images/a8ef81a7ba109a63d1f1c9905bf04187.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=b51d3800170b22cf0a2571cd9a4e3d22",
        nome: "Produto 5",
        valor: 69.99,
        descricao: "Produto versátil com acabamento premium e tecnologia atualizada."
    },
    {
        id: 6,
        imagem: "https://ultragames.com.br/wp-content/uploads/elementor/thumbs/nintendo-switch2-post-r7d4phtw50udgwmr5nxwiyvbijjz6ptbe9np2hqy6g.png",
        nome: "Produto 6",
        valor: 79.99,
        descricao: "Potente e eficiente, atende até os usuários mais exigentes."
    },
    {
        id: 7,
        imagem: "https://cdn.shoppub.io/cdn-cgi/image/w=600,h=600,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/dbsbkasu/file.png",
        nome: "Produto 7",
        valor: 89.99,
        descricao: "Combina alto desempenho com estilo elegante e moderno."
    },
    {
        id: 8,
        imagem: "https://preview.redd.it/qual-foi-o-seu-maior-arrependimento-com-consoles-e-jogos-v0-7wsquglhmmgc1.jpeg?width=640&crop=smart&auto=webp&s=83986dda1290afc5fd6c9d6b7b30fd3e84cdf3a8",
        nome: "Produto 8",
        valor: 99.99,
        descricao: "Top de linha, com tecnologia de ponta e recursos avançados."
    },
];

let produtosContainer = document.querySelector(".produtos_container")

let renderizarProdutos = () => {
    produtos.forEach(produto => {
        produtosContainer.innerHTML += `
            <div class="card_produto" meta-id="${produto.id}">
                <img class="card_produto_img" src="${produto.imagem}" alt="${produto.nome}">
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
}

renderizarProdutos()

let cardProdutos = document.querySelectorAll(".card_produto")

cardProdutos.forEach(card => {
    card.addEventListener("click", () => {
        let produtoId = card.getAttribute("meta-id") - 1
        localStorage.setItem("produtoSelecionado", JSON.stringify({
            id: produtos[produtoId].id,
            imagem: produtos[produtoId].imagem,
            nome: produtos[produtoId].nome,
            valor: produtos[produtoId].valor,
            descricao: produtos[produtoId].descricao
        }))
        window.location.href = "produto.html"
    })
})


