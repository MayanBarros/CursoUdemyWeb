const pessoa = {
    saudacao: 'Bom dia !',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar

falar() // Conflito entre paradigmas: funcional e Orientação a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa) // Função bind corrige o argumento this 
falarDePessoa()