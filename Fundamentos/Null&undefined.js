let valor //Não inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 5.5
console.log(produto)

produto.preco = undefined // Evite atribuir undefined!!!
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // Sem Preço
console.log(!!produto.preco)
console.log(produto)
