const pessoa = {
    nome: 'Joao',
    idade: 21,
    profissao: 'Desenvolvedor'
}

console.log(pessoa.nome)
console.log(pessoa.idade)

const {nome, idade} = pessoa

console.log(nome)
console.log(idade)

function saudacao({ nome, idade}) { // Essa funçao recebe um objeto inteiro com parametro, porem so estamos nos importando com o nome e idade
    console.log('Ola '+ nome)

    if (idade > 18) {
        console.log('Voce ja é maior de idade!')
    } else {
        console.log('Voce nao é maior de idade ainda!')
    }
}

saudacao(pessoa)