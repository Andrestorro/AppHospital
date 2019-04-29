import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private actionSheetController: ActionSheetController,
    private userService: UsersService
  ) { }

  logout(){
    this.userService.logout();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Cerrar Sesión',
        icon: 'log-out',
        handler: () => {
          this.logout()
        }
      }]
    });
    await actionSheet.present();
  }

}
