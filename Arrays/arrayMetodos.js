const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro!!!
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona na ultima posição do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista!!!
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no primeiro elemento da lista!!!
console.log(pilotos)

// splice pode adicionar ou remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1,) // Massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)