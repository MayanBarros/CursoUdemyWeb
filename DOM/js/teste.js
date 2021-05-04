function a(x , i) {
    while ( i < 10 ) {
        i++
        x = a(x + 1)
    }
    return x
}

console.log(a(3, 1))