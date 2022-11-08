import { Carta } from './carta';
import { CONSTANTES_IMAGEN_CARTA } from './constantes';
import { CONSTANTES_TIPO_CARTA } from './constantes';
export class Mazo {
    public listadoCartas: Carta[];

    constructor() {
        this.listadoCartas = [];
        this.iniciarListadoCartas();
        this.shuffleMazoCartas();
    }

    public iniciarListadoCartas() {
        let criatura1: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.CRIATURA_1,CONSTANTES_TIPO_CARTA.ID_TIPO_CRIATURA,1);
        let criatura2: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.CRIATURA_2,CONSTANTES_TIPO_CARTA.ID_TIPO_CRIATURA,2);
        let criatura3: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.CRIATURA_3,CONSTANTES_TIPO_CARTA.ID_TIPO_CRIATURA,3);
        let criatura4: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.CRIATURA_4,CONSTANTES_TIPO_CARTA.ID_TIPO_CRIATURA,4);
        let criatura5: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.CRIATURA_5,CONSTANTES_TIPO_CARTA.ID_TIPO_CRIATURA,5);

        let conjuro6: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.CONJURO_6,CONSTANTES_TIPO_CARTA.ID_TIPO_CONJURO,6);
        let conjuro7: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.CONJURO_7,CONSTANTES_TIPO_CARTA.ID_TIPO_CONJURO,7);
        let conjuro8: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.CONJURO_8,CONSTANTES_TIPO_CARTA.ID_TIPO_CONJURO,8);
        let conjuro9: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.CONJURO_9,CONSTANTES_TIPO_CARTA.ID_TIPO_CONJURO,9);
        let conjuro10: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.CONJURO_10,CONSTANTES_TIPO_CARTA.ID_TIPO_CONJURO,10);

        let artefacto11: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.ARTEFACTO_11,CONSTANTES_TIPO_CARTA.ID_TIPO_CONJURO,11);
        let artefacto12: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.ARTEFACTO_12,CONSTANTES_TIPO_CARTA.ID_TIPO_CONJURO,12);
        let artefacto13: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.ARTEFACTO_13,CONSTANTES_TIPO_CARTA.ID_TIPO_CONJURO,13);
        let artefacto14: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.ARTEFACTO_14,CONSTANTES_TIPO_CARTA.ID_TIPO_CONJURO,14);
        let artefacto15: Carta = new Carta(CONSTANTES_IMAGEN_CARTA.ARTEFACTO_15,CONSTANTES_TIPO_CARTA.ID_TIPO_CONJURO,15);

        this.agregarCartaMazo(criatura1,10);
        this.agregarCartaMazo(criatura2,15);
        this.agregarCartaMazo(criatura3,4);
        this.agregarCartaMazo(criatura4,10);
        this.agregarCartaMazo(criatura5,4);

        this.agregarCartaMazo(conjuro6,2);
        this.agregarCartaMazo(conjuro7,2);
        this.agregarCartaMazo(conjuro8,2);
        this.agregarCartaMazo(conjuro9,2);
        this.agregarCartaMazo(conjuro10,2);

        this.agregarCartaMazo(artefacto11,1);
        this.agregarCartaMazo(artefacto12,1);
        this.agregarCartaMazo(artefacto13,2);
        this.agregarCartaMazo(artefacto14,2);
        this.agregarCartaMazo(artefacto15,1);
    }

    public agregarCartaMazo(carta:Carta , cantidad:number ){
        for (let i = 0 ; i < cantidad ; i ++){
            this.listadoCartas.push(carta);
        }
    }

    public shuffleMazoCartas(){
        var m = this.listadoCartas.length, t, i;
  
        // While there remain elements to shuffle
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = this.listadoCartas[m];
            this.listadoCartas[m] = this.listadoCartas[i];
            this.listadoCartas[i] = t;
        }
    }
}
