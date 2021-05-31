const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('./api/produto')(app, 'com param!')

//const saudacao = require('./saudacaoMid')
//const usuarioApi = require('./api/usuario')


//app.post('/usuario', usuarioApi.salvar)
//app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//app.use(saudacao('Mayan'))

app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte) {
        corpo += parte
    })

    req.on('end', function() {
        res.send(corpo)
    })
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/opa', (req, res, next) => {
    console.log('Durante...')
    res.json([
        {id: 1, name: 'Mayan', idade: 18},
        {id: 2, name: 'Alana', idade: 19},
        {id: 3, name: 'Miotto', idade: 38},
        {id: 4, name: 'Lucas', idade: 78}
    ])

    res.json({
        nome: 'Iphone 64gb',
        preco: 2500.00,
        quantidade: 1
})

    res.send('<h1>Estou <b>bem !!!</b></h1>')
    next()
})

app.use('/opa', (req, res) => {
     console.log('Depois...')
})


app.listen(3000, () => console.log("Executando na porta 3000 - Backend..."))