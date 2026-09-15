import ErroBase from "./erroBase.js";

class RequisicaoIncoreta extends ErroBase {
    constructor(mensagem = "Um ou mais dados fornecidos estao incorretos") {
        super(mensagem, 400);
    }
}

export default RequisicaoIncoreta;
