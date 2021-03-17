//Função sem retorno
function ImprimirSoma(a, b){
console.log(a + b)
}

ImprimirSoma(1,2)
ImprimirSoma(3)
ImprimirSoma(3, 2, 3)
ImprimirSoma()

//Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
