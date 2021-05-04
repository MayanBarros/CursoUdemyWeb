const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const pernalonga = new Character('Pernalonga')
pernalonga.on('help', () => console.log(`Eu! o ${pernalonga.name} do desenho!`))
console.log('Cadê você pernalonga ???????')
pernalonga.emit('help')