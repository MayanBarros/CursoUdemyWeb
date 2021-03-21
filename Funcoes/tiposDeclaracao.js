console.log(soma(3, 2)) //permite chamar pois o js carrega todas as funcões primeiro antes de rodar o código
// console.log(sub(3, 2)) // não roda pois armazenada dentro de uma variável que ainda não foi definida
// console.log(mult(3, 2)) // não roda pois armazenada dentro de uma variável que ainda não foi definida

// function declaration
function soma (x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 2))

// named function expression
const mult = function mult (x, y) {
    return x * y
}
console.log(mult(3, 2))