// Arrow Function
const soma = (a, b) => console.log(a + b)
soma(5, 5)

// Arrow Function
const lexico1 = () => console.log(this === module.exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametros Default
function log( texto = 'Node') {
    console.log(texto)
}
log('Zika')
log()

// Operador Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return console.log(total)
}
total(1,2,3,4,5,6,7)
