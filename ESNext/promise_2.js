/*
setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function() {
        console.log('Executando callback...')
        
        setTimeout(function() {
            console.log('Executando callback...')
            
        }, 2000)
    }, 2000)
}, 2000) */

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('Vishhhh')
        }, tempo)
    })
}

esperarPor(2000)
    .then(esperarPor(5000))
    .then(esperarPor(10000))