function tipoDoTriangula (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log("Triangulo Equilátero")
    } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        console.log("Triangulo Isóceles")
    } else {
        console.log("Triangulo Escaleno")
    }
}

tipoDoTriangula(5, 5, 5) // Equilátero

tipoDoTriangula( 5, 5, 10) // Isóceles

tipoDoTriangula(5, 6 ,7) // Escaleno