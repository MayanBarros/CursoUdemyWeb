// let e const 
{
    var a = 1
    let b = 3
    console.log(b)
}
console.log(a)
// console.log(b) não funciona 


 // Template String

const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring 
const [ A, B, C, D, E ] = "Mayan"
console.log( A, B, C, D, E )

const [X, Y] = [1, 2]
console.log(X, Y)

const { idade, nome } = {nome: 'Ana', idade: 9}
console.log(`${nome} tem ${idade} de idade!`)