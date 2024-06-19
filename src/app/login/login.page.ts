import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required), 
      'password': new FormControl("",Validators.required)
    });
  }

  async ingresar() {
    var f = this.formularioLogin.value;

    var usuarioUnPar = localStorage.getItem('usuario');
    if (usuarioUnPar !== null){
      var usuario = JSON.parse(usuarioUnPar);

    }else{

    }

    if (usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresando')
      localStorage.setItem('ingresado', 'true')
      this.navCtrl.navigateRoot('menu/inicio');
    }else{
      const alert = await this.alertController.create({
        header: 'datos incorrectos',

        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }



  ngOnInit() {
  }

}
