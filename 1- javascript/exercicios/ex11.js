compras = [35, 40, 14, 15, 40]
let somaDasCompras = 0

for (compra of compras) {
    somaDasCompras += compra
}

console.log('Soma das compras sem o desconto aplicado:', somaDasCompras)

let desconto = somaDasCompras * 0.8

console.log('Total com 20% de desconto aplicado:', desconto)