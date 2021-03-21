function Bhaskara (a, b, c) {
    let resultado = []
    let delta = (b**2) - (4 * a * c)
    if (delta < 0) {
        console.log("Delta é negativo")
    } else {
        let x1 = ((-b) + Math.sqrt(delta)) / 2 * a
        let x2 = ((-b) - Math.sqrt(delta)) / 2 * a
        resultado.push(x1.toFixed(0))
        resultado.push(x2.toFixed(0))
        console.log(resultado)
    }
    
}
Bhaskara(-3, -5, 12)
