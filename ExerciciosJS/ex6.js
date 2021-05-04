function jurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    let taxa = taxaDeJuros / 100
    let final = capitalInicial + (capitalInicial * taxa * tempoDeAplicacao)
    console.log(`R$ ${final.toFixed(2).toString().replace('.', ',')}`)
}

jurosSimples(1000, 10, 3)

function jurosComposto (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    let taxa = taxaDeJuros / 100
    let final = capitalInicial * (1 + taxa) ** tempoDeAplicacao
    console.log(`R$ ${final.toFixed(2).toString().replace('.', ',')}`)
}

jurosComposto(1000, 10, 3)