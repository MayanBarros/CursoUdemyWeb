let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Mayan', 'Bia', 'Ana', 'Alana'])
})

function PrimeiroElemento(array) {
    return array[0]
}

function PrimeiraLetra(string) {
    return string[0]
}

const Minuscula = letra => letra.toLowerCase()



p
    .then(PrimeiroElemento)
    .then(PrimeiraLetra)
    .then(Minuscula)
    .then(console.log)

