const valores = [7.7 , 8.9 , 6.7 , 4.2]
console.log(valores[0], valores[3])
console.log(valores[500])

valores[3] = 200
console.log(valores)
console.log(valores.length) // Diz quantos elementos temos no array

valores.push(NaN , 'Mayan' , 66 , undefined)
console.log(valores)
// O método push() adiciona um ou mais elementos ao final de um array
// e retorna o novo comprimento desse array.


console.log(valores.pop()) // undefined
// O método pop() remove o último elemento de um array e retorna aquele elemento.
delete valores[4]
console.log(typeof valores)
