//Armazenando uma função na variável
const ImprimirSoma = function (a, b) {
    console.log(a + b)
}
ImprimirSoma(2, 3)

// Armazenando uma funçaõ arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(3, 5))

//Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(10, 5))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")

