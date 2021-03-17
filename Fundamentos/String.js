const escola = 'MegaVisão'

console.log(escola.charAt(4)) 
// Método que retorna a posição letra da string na posição definida nos parânteses

console.log(escola.charCodeAt(5))
// Método que retorna o valor da string definifo nos parêteses na tabela unicode 

console.log(escola.indexOf('V'))
// Retornar o dígito referente a posição 3 dentro da string escola

console.log(escola.substring( 2 ))
// imprime a partir da posição 2 da string
console.log(escola.substring(1, 5))
// imprime da posição 1 até a 5 da string

console.log('Escola' + escola + '!') // Concatenação com +
console.log('Escola '.concat(escola).concat("!")) // Concatenação com o método .concat('string')
console.log(escola.replace(4, 'v')) // substitui a letra da string desejada por outra letra

console.log('Mayan, Patrícia, Vanilzo'.split(','))
// Converte os valores de string para array






 