import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb:FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmPassword': new FormControl("", Validators.required)

    });
   }

   async guardar() {
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
    const alert = await this.alertController.create ({
      header: 'Error de Datos',
      message: 'Datos del formulario vacios o no validos',
      buttons: ['Aceptar']
    });

    await alert.present();
    return; 
  }

  var usuario = {
    nombre: f.nombre,
    password: f.password
  }

  localStorage.setItem('usuario',JSON.stringify(usuario));

  const alert = await this.alertController.create ({
    header: 'Exito',
    message: 'Usuario creado satisfactoriamente',
    buttons: ['Aceptar']
  });

  await alert.present();
  
  this.navCtrl.navigateRoot('login');
}

  ngOnInit() {
  }

}
