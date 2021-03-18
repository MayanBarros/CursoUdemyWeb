const notas = [6.7 , 7.4 , 8.7 , 2.3 , 5.4]

for ( let i in notas) {
    console.log(i , notas[i])
}

const pessoa = {
    nome: 'Mayan',
    sobrenome: 'Barros',
    idade: 17,
    peso: 64
}

for ( let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
