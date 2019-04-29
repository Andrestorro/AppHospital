import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUserComponent } from './user/modal-user/modal-user.component';

@NgModule({
  declarations: [
    ModalUserComponent
  ],
  exports: [
    ModalUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
