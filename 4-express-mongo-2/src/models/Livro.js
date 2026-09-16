import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {
            type: String, 
            required: [true, "O titulo do livro é obrigatorio"]
        },
        autor: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'autores', 
            required: [true, "O(a) autor(a) é obrigatorio"]
        },
        editora: {
            type: String, 
            required: [true, "A editora é obrigatorio"],
            enum: {
                values: ["Editora Joao"],
                message: "A editora {VALUE} não é um valor permitido."
            }
        },
        numeroPaginas: {
            type: Number,
            min: [10, "O numero de paginas deve estar entre 0 a 5000. Valor fornecido {VALUE}."],
            max: [5000, "O numero de paginas deve estar entre 0 e 5000. Valor fornecido {VALUE}."]
        }
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;