
function criarProduto (nome, preco, desconto = 0.1) {
    return {
        nome,
        preco, 
        desconto
    }
}


console.log(criarProduto("Iphone", 4500))
console.log(criarProduto("Notebook", 5000))
console.log(criarProduto().desconto)
console.log(criarProduto("Mayan").nome)