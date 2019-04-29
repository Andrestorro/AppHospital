import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public usuario = {
    typeDocument: '',
    document: '',
    firstName: '',
    lastName: '',
    typeUser: 'Paciente',
    address: '',
    gender: '',
    age: null,
    email: '',
    password: '',
    passwordRepeat: ''
  }

  constructor(
    private userService: UsersService,
    private route: Router,
    private alert: AlertController
  ) { }

  ngOnInit() {
  }

  async registerU(){
    const alerta = await this.alert.create({
      header: 'Error',
      message: 'La información ingresada no es correcta.',
      buttons: ['Ok']
    })

    if(this.usuario.password === this.usuario.passwordRepeat){
      this.userService.register(this.usuario).then(() =>{
        this.route.navigate(['/tabs/user'])
      })
    }else{
      alerta.present()
    }
  }

}
