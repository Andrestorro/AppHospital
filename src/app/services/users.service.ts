import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersI } from '../models/users';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public usuario: UsersI = {
    typeDocument: '',
    document: '',
    firstName: '',
    lastName: '',
    typeUser: '',
    address: '',
    gender: '',
    age: null,
    email: '',
    password: ''
  }

  constructor(
    private angularAuth: AngularFireAuth,
    private angularFire: AngularFirestore,
    private route: Router
  ) { }

  // Registro de usuario
  register(usuario){
    return new Promise((resolve, reject) => {
      this.angularAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.password).then(users => {

        const id = users.user.uid;
        this.angularFire.collection('users').doc(id).set({
          typeDocument: usuario.typeDocument,
          document: usuario.document,
          firstName: usuario.firstName,
          lastName: usuario.lastName,
          typeUser: usuario.typeUser,
          address: usuario.address,
          gender: usuario.gender,
          age: usuario.age,
          email: usuario.email,
          password: usuario.password
        })
        resolve(users);
      }).catch(error => reject(error))
    })
  }

  // Logueo
  loguin(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.angularAuth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user)
      }).catch(error => reject(error))
    })
  }

  logout(){
    this.angularAuth.auth.signOut().then(() => {
      this.route.navigate(['/loguin'])
    })
  }
}
