export class Carta {
    public idImagenCarta: string;
    public idCarta: number;
    public idTipoCarta: number;

    constructor(idImagenCarta: string,idTipoCarta: number,idCarta: number) {
        this.idImagenCarta = idImagenCarta;
        this.idCarta = idCarta;
        this.idTipoCarta = idTipoCarta;
    }
}