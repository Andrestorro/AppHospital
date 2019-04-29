import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { isNullOrUndefined } from 'util';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoLoguinGuard implements CanActivate  {

  constructor(
    private angularAuth: AngularFireAuth,
    private route: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      return this.angularAuth.authState.pipe(
        map(user => {

          if(isNullOrUndefined(user)){
            return true
          }else{
            this.route.navigate(['/tabs/user'])
            return false
          }

        })
      )

  }
  
}
