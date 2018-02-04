import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  bmostrarLogin:boolean=false;
  bmostrarRegistro:boolean=false;
  constructor(private _cookieService:CookieService, private _loginService:LoginService, private router: Router) { }

  ngOnInit() {
    if(this._cookieService.get("apiEscribanoConfirmacionN")!=null){
      this._loginService.getToken(this._cookieService.get("apiEscribanoConfirmacionN"), this._cookieService.get("apiEscribanoConfirmacionP")).then(result=>{
       if(result){
         console.log('dsdad');
        this.router.navigate(['index_private']);
       }
      });
     

    }
    window.addEventListener('storage', function(e) {  
      console.log(e);
    });
  }
  esconderLogin(e){
    this.bmostrarLogin=false;
    
  }
  mostrarLogin(e){
    this.bmostrarLogin=true;
   
  }
  esconderRegistro(e){
   
    this.bmostrarRegistro=false;
  }
  mostrarRegistro(e){
   
    this.bmostrarRegistro=true;
  }
}
