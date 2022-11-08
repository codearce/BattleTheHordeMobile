import { Component, OnInit } from '@angular/core';
import { CampoBatalla } from './util/campoBatalla';
import { Carta } from './util/carta';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  campoBatalla: CampoBatalla;
  contadorCartasMazo: number;
  contadorCartasCementerio: number;
  estadoJuego: string = "In Game";

  mostrarDetalleCarta: boolean = false;
  rutaCartaSeleccionada: string = "";
  cartaSeleccionada: any;
  cantidadVidasJugador: number = 20;

  constructor() { 
    this.campoBatalla = new CampoBatalla();
  }

  ionViewDidLoad() {
    
  }
  
  /**
   * Al iniciar turno , se toman las primeras dos cartas de la baraja y se colocan en juego.
   */
  robarCarta(){
    console.log("iniciar turno ");
    let carta1: Carta = this.campoBatalla.mazo.listadoCartas.shift();

    this.campoBatalla.cartasEnJuego.push(carta1);

    console.log("cartas en juego   +  this.campoBatalla.cartasEnJuego");
  }

  obtenerCarta(indice): string{
    let carta = this.campoBatalla.cartasEnJuego[indice];
    if(carta === undefined){
      return "./assets/cartas/undefined.jpg";
    } else {
      return carta.idImagenCarta;
    }
  }

  /**
   * Al aplicar danio , se toma una carta del mazo y se deja en el cementerio.
   */
  aplicarDanio() {
    console.log("aplicar darnio" );
    let cartaEliminada = this.campoBatalla.mazo.listadoCartas.shift();
    this.campoBatalla.listadoCementerio.push(cartaEliminada);
    this.validarEstadoJuego();
  }

  validarEstadoJuego(){
    if (this.campoBatalla.mazo.listadoCartas.length == 0 && this.campoBatalla.cartasEnJuego.length == 0){
      this.estadoJuego = "WIN 4 HORAS WEANDO! a terminar habitat mierda !";
    }
  }

  eventoMostrarDetalleCarta(carta:any){
    this.cartaSeleccionada = carta;
    this.mostrarDetalleCarta = true;
    this.rutaCartaSeleccionada = carta.idImagenCarta;
  }

  descargarCartaEnJuego(){
    this.mostrarDetalleCarta = false;
    let indiceEliminar = this.campoBatalla.cartasEnJuego.indexOf(this.cartaSeleccionada);
    console.log(">>> indiceEliminar" + indiceEliminar);
    let cartaEliminada = this.campoBatalla.cartasEnJuego.splice(indiceEliminar,1);
    this.campoBatalla.listadoCementerio.push(cartaEliminada);
    this.validarEstadoJuego();
  }

  sumarVida(){
    this.cantidadVidasJugador ++;
  }

  restarVida(){
    this.cantidadVidasJugador --;
    if(this.cantidadVidasJugador <= 0){
      this.estadoJuego = "LOSE WORK MELDA!";
    }
  }
}
