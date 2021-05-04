Array.prototype.map2 = function(callback) {
    const newArray = []
    for ( let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const stringToObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(stringToObj).map2(apenasPreco)
console.log(resultado)