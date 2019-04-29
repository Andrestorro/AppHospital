import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.page.html',
  styleUrls: ['./loguin.page.scss'],
})
export class LoguinPage implements OnInit {

  public email: string;
  public password: string

  constructor(
    private userService: UsersService,
    private route: Router,
    private alert: AlertController
  ) { }

  ngOnInit() {
  }

  async loguin(){
    const alerta = await this.alert.create({
      header: 'Error al iniciar sesión',
      message: 'Los datos son incorrectos o el usuario con ese correo electronico no existe.',
      buttons: ['Ok']
    })

    this.userService.loguin(this.email, this.password).then(user => {
      this.route.navigate(['/tabs/user'])
      this.clear()
    }).catch(() => alerta.present())
  }

  clear(){
    this.email = '',
    this.password = ''
  }

}
