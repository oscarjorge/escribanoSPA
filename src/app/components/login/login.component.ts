import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService,private formBuilder: FormBuilder, private router: Router) { 
   
  }
  loginSocialNetwork(provider:string){
    this.loginService.loginSocialNetwork(provider).then(result=>{}).catch(err=>console.error('No se ha podido iniciar sesión con ' + provider));

  }
  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(this.loginForm);
    if(!this.loginForm.invalid)
      this.loginService.getToken(value.username, value.pass).then(result=>{
        console.log(result)
        if(result)
        this.router.navigate(['index_private']);
      });
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }
  salir(){
    this.router.navigate(["index_public"])
  }
}
