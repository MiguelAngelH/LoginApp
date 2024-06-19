import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-entrada-detalle',
  templateUrl: './entrada-detalle.page.html',
  styleUrls: ['./entrada-detalle.page.scss'],
})
export class EntradaDetallePage implements OnInit {

  entrada: {
    fecha: string,
    fechaTexto: string,
    texto: string
  } = {
    fecha: '',
    fechaTexto: '',
    texto: ''
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { [key: string]: any } | undefined;

    if (state && state['entrada']) {
      this.entrada = state['entrada'];
      console.log(this.entrada);
    }
  }

  ngOnInit() {}
}
