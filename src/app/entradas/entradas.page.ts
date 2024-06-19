import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {

  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }> = []; 

  constructor(private router: Router) {
    this.cargarEntradas();
  }

  ngOnInit() {
  }

  cargarEntradas() {
    const entradasFromLocalStorage = localStorage.getItem('entradas');
    if (entradasFromLocalStorage) {
      this.entradas = JSON.parse(entradasFromLocalStorage);
      this.entradas.sort((item1, item2) => {
        if (item1.fecha < item2.fecha) return 1;
        if (item1.fecha > item2.fecha) return -1;
        return 0;
      });
    }
  }
  irDetalle(entrada:{
    fecha: string,
    fechaTexto: string,
    texto: string
  }){
    let datosNavegacion: NavigationExtras = {
      state: {
        entrada: entrada
      }
    }

    this.router.navigate(['/entrada-detalle'],datosNavegacion);
  }

}