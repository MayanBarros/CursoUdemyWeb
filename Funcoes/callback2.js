const notas = [4.5, 8.3, 5.4, 7.1, 9.3, 3.2, 10]
// sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// com callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// callback com função arrow

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)

