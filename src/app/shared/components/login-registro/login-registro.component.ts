import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { AuthService } from '../../services/auth.service'
import { LoginService} from '../../services/login.service'

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.css']
})
export class LoginRegistroComponent implements OnInit {

  constructor(private authService:AuthService,
    private loginService:LoginService) { }

  ngOnInit() {
    if(this.isAuth()){
      console.log('aaa')
      this.loginService.getInformationUser().then(data=>{
        console.log(data);
      }).catch(e=>{

      });
    }
    
  }
 
  logOut(e){
   
    this.loginService.logOut();
  }
  isAuth(){
    
    return this.authService.isAuthenticated();
    
  }
}
