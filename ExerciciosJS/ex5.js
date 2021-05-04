function corrigirValorEmReais (number) {
    correcao = `R$ ${number.toFixed(2).toString().replace(".", ",")}`
    console.log(correcao)
}
corrigirValorEmReais(0.1 + 0.2)