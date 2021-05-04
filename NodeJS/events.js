const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log(`Eu estou te escutando: ${message}`)
}) // ev.once - serve para ouvir uma unica vez o evento

ev.emit('saySomething', "Mayan")
ev.emit('saySomething', "Gustavo")
ev.emit('saySomething', "Isabelly")