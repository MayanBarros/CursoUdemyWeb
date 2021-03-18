function getInteiroValorAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}

let opçao = -1

do {
    opçao = getInteiroValorAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opçao}.`)
} while (opçao != -1)

console.log('Até a próxima!')
