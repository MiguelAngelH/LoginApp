import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  fecha: string;
  entradas: Array<{
    fecha: string;
    fechaTexto: string;
    texto: string;
  }> = [];
  entradaActual: {
    fecha: string;
    fechaTexto: string;
    texto: string;
  } = {
    fecha: '',
    fechaTexto: '',
    texto: ''
  };

  constructor(public toastController: ToastController) {
    moment.locale('es');
    this.fecha = moment().format();
    this.cargarEntradas();
  }

  cargarEntradas() {
    var fecha = moment(this.fecha).format('DD-MM-YY');
    const entradasFromLocalStorage = localStorage.getItem('entradas');
    if (entradasFromLocalStorage) {
      this.entradas = JSON.parse(entradasFromLocalStorage);
    }
    var entradaActual = this.entradas.find((elemento) => {
      return elemento.fecha == fecha;
    });
    if (entradaActual) {
      this.entradaActual = entradaActual;
    } else {
      this.inicializarNuevaEntrada();
    }
  }

  inicializarNuevaEntrada() {
    var fecha = moment(this.fecha).format('DD-MM-YY');
    var dia = moment(this.fecha).format('DD');
    var mes = moment(this.fecha).format('MMMM');
    var year = moment(this.fecha).format('YYYY');

    this.entradaActual = {
      fechaTexto: dia + ' de ' + mes + ' del ' + year,
      fecha: fecha,
      texto: ' ',
    };
  }

  async guardar(entradaActual: {
    fecha: string;
    fechaTexto: string;
    texto: string;
  }) {
    var fecha = moment(this.fecha).format('DD-MM-YY');

    var item = this.entradas.find((elemento) => {
      return elemento.fecha == fecha;
    });
    if (item) {
      this.entradas = this.entradas.map((entrada) => {
        if (entrada.fecha === fecha) {
          return entradaActual;
        } else {
          return entrada;
        }
      });
    } else {
      this.guardarItem(entradaActual);
    }

    localStorage.setItem('entradas', JSON.stringify(this.entradas));

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000,
    });
    toast.present();
  }

  guardarItem(entrada: { fecha: string; fechaTexto: string; texto: string }) {
    this.entradas.push(entrada);
  }

  ngOnInit() {}
}
