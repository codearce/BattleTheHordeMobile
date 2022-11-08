import { Mazo } from './mazo';

export class CampoBatalla {
    public mazo: Mazo;
    public listadoCementerio = [];
    public cartasEnJuego = [];
    
    constructor() {
        this.mazo = new Mazo();
    }
}