const frutas = ['Melancia', 'Morango', 'Uva']

const maisFrutas = ['Maça', 'Laranja', 'Goiaba']

const clone = [...frutas]

const todasFrutas = [...frutas, ...maisFrutas]

frutas.push('Melao')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasFrutas)

const [primeira, segunda, ...restante] = todasFrutas

console.log(primeira)
console.log(segunda)
console.log(restante)