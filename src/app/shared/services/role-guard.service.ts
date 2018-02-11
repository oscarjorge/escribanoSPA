import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router, public loginService:LoginService) {}

  canActivate(route: ActivatedRouteSnapshot):Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.loginService.authorizeAdmin().then(d=>{
       resolve(true);;
      }).catch(d=>{
        this.router.navigate(['login']);
        reject();
      })
    })
    
    // // this will be passed from the route config
    // // on the data property
    // const expectedRole = route.data.expectedRole;

    // const token = localStorage.getItem('token');

    // // decode the token to get its payload
    // const tokenPayload = decode(token);

    // if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
    //   this.router.navigate(['login']);
    //   return false;
    // }
    // return true;
  }

}