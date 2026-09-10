const agora = new Date() // ISO 8601

console.log(agora)

console.log('Ano:', agora.getFullYear())
console.log('Mes:', agora.getMonth())
console.log('Dia do mes:', agora.getDay())

console.log('Hora:', agora.getHours())
console.log('Minutos:', agora.getMinutes())

const nascimento = new Date('2005-02-09T03:00:00.000Z')

console.log(nascimento)

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'))
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US'))