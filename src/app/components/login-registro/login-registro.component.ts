import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService} from '../../services/base.service'
import { LoginService} from '../../services/login.service'
@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.css']
})
export class LoginRegistroComponent implements OnInit {

  constructor(private router: Router, private base:BaseService, private loginService:LoginService) { }

  ngOnInit() {
  }
  mostrarLogin(e){
    this.router.navigate(['login']);
   
  }
  mostrarRegistro(e){
   
    this.router.navigate(['registro']);
  }
  logOut(e){
   
    this.loginService.logOut();
  }
  isAuth(){
    return this.base.isAuth();
  }
}
