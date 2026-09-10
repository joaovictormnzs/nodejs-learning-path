valores = [10, 20, 30, 40, 50]

let valoresDesconto = valores.map(valor => {
    return valor * 0.9
})

console.log('precos sem desconto:', valores)
console.log('precos com desconto:', valoresDesconto)