import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoguinGuard implements CanActivate  {

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
            this.route.navigate(['/loguin'])
            return false
          }else{
            return true
          }

        })
      )
  }
  
}
