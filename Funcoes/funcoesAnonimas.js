const soma = function (a, b) {
    return a + b
}

const imprimirResultado = function (x, y, operacao = soma) {
    console.log(operacao(x, y))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (a, b) {
 return a - b
})
imprimirResultado(3, 4, (a, b) => a * b)

const Pessoa = {
    falar: function() {
        console.log("Falando...")
    }
}

Pessoa.falar()