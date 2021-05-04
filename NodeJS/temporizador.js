const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 3', function() {
    console.log(`Executando tarefa 1!`, new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando a Tarefa 1!')
}, 20000)

// setImmediate
// setInverval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [ new schedule.Range(1, 5)]
regra.hour = 14
regra.second = 30 

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log("Executando Tarefa 2!", new Date().getSeconds())
})
