// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //congela o objeto - não é possível fazer novas alterações
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

