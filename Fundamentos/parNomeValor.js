// par nome/valor
const saudacao = 'Opa' // Contexto Lexico 1

function exec() {
    const saudacao = 'Falaaaaa' // Contexto Lexico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 45
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)

