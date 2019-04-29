import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalUserComponent } from 'src/app/components/user/modal-user/modal-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async modal(){
    const modal = await this.modalController.create({
      component: ModalUserComponent
    })
    await modal.present()
  }

}
