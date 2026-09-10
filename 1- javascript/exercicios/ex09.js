notas = [10, 5, 8, 7]

somaNota = 0

for (nota of notas) {
    somaNota += nota
}

let media = somaNota / notas.length

if (media >= 7 ) {
    console.log ('Aprovado')
} else {
    console.log ('Reprovado')
}