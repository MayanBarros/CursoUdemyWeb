{
    {
        {
            {
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function Teste () {
    var teste = 'Teste fora do escopo'
    console.log(teste)
}

Teste()

console.log(teste)
// Não é possível acessar a variável teste fora do escopo da função