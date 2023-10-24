export default class Tela {
    constructor(elemento = document.querySelector("#values")) {
        this.elemento = elemento;
        this.conteudo = "0";
    }
    set conteudo(value) {
        if (value.toString().length > 12) {
            value = "ERRO";
        }
        if (this.elemento) {
            this.elemento.innerHTML = value.toString().replace(".", ",");
        }
    }
    get conteudo() {
        if (this.elemento) {
            return this.elemento.innerHTML;
        }
        else {
            return '0';
        }
    }
}
//# sourceMappingURL=Tela.js.map