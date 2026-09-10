// Spread espalha as propriedades.

let joao1 = {
    nome: 'Joao',
    idade: 21,
    profissao: 'Desenvolvedor'
}

//const joao2 = joao1 --> Modo errado, altera a idade de ambos.
const joao2 = {...joao1} //--> spreadOperator

joao2.idade = 22

console.log(joao1)
console.log(joao2)

joao1 = {
    ...joao2,
    profissao: 'Desenvolvedor Senior',
    possuiCNH: true
}

console.log('Apos a adicao:', joao1)

const { nome, ...restante } = joao1 // Separando as propriedades (RestOperator)

console.log(nome)
console.log(restante)

