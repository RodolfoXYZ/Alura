let totalGeral = 0;
limpar();

function adicionar() {
    // Recuperar Valores (Nome, Quantidade, e Valor)
    // Calcular o Preço, Subtotal Por Produto
    // Adicionar ao Carrinho
    // Atualizar Valor Total
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; // A função split separa os trechos de uma string em um array, divididos entre antes e depois do termo passado por parâmetro na função.
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    let totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 00,00';

}