// function saudacao(nome) { // nome é um parametro da funcao saudacao
//     console.log('Olá,', nome)
// }

// const saudacao = (nome) => {  Arrow function 
//     console.log('Olá,', nome)
// }

const saudacao = nome => console.log('Ola,',nome) // Arrow function simplificada

saudacao('Joao') // Joao é o "argumento"

// function calcularDobro(numero) {
//     return numero * 2
// }

const calcularDobro = numero => numero * 2

const numeroDobrado = calcularDobro(10)
console.log(numeroDobrado)