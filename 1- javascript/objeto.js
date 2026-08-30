const livro = {
    nome: 'O Hobbit',
/// autor: 'J. R. R. Tolkien',
    paginas: 310
}

livro.publicado = true
livro.idiomas = [
    'Portugues', 'Ingles', 'Espanhol', 'Frances'
]

console.log('Livro antes:', livro)

delete livro.paginas

console.log('Livro depois:', livro)


const autor = {
    nome: 'J. R. R. Tolkien',
    nacionalidade: 'Britanico',
    idade: 98
}

console.log('Autor:', autor)

livro.autor = autor

console.log('Livro:', livro)

console.log('Autor de O Hobbit:', livro['autor'])