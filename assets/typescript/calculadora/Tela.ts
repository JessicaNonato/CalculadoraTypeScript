export default class Tela{
    /**
     *
     */
    constructor(private elemento: HTMLDivElement | null = document.querySelector("#values")) 
    {
        this.conteudo = "0";
    
    }

    set conteudo(value: string){
        if(value.toString().length > 12){
            value = "ERRO"
        }
        if (this.elemento){
            this.elemento.innerHTML = value.toString().replace(".", ",");
        }
    }
    get conteudo(): string{
        if(this.elemento){
            return this.elemento.innerHTML;
    } else{
        return '0';
    }
}
}