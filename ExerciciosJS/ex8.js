let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliarPontuacoes (stringPontuacoes) {
let pontuacoes = stringPontuacoes.split(", ")
let qtdQuebraDeRecords = 0
let piorJogo = 1
let maiorPontuacao = pontuacoes[0]
let menorPontuacao = pontuacoes[0]

for (let i = 1; i < pontuacoes.length ; i++) {
    if (pontuacoes[i] > maiorPontuacao) {
        maiorPontuacao = pontuacoes[i]
        qtdQuebraDeRecords++
    } else if (pontuacoes[i] < menorPontuacao) {
        maiorPontuacao = pontuacoes[i]
        piorJogo = i++
    }
}
    console.log([qtdQuebraDeRecords, piorJogo])
}

avaliarPontuacoes(stringPontuacoes)