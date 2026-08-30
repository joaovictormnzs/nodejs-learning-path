const frutas = ['Uva', 'Maça', 'Melancia', 'Morango']

for(let i = 0; i < frutas.length; i++) {
    console.log('indice:', i)
    console.log(frutas[i])
}

console.log('\nUsando forEach:')
frutas.forEach(fruta => {
    console.log(fruta)
})

console.log('\nUsando for Of:')
for(const fruta of frutas) {
    console.log('fruta da vez:', fruta)
}