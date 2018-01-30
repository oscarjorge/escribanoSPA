import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @Output() logueado = new EventEmitter();
  constructor(private loginService: LoginService,private formBuilder: FormBuilder) { 
   
  }
  loginSocialNetwork(provider:string){
    this.loginService.loginSocialNetwork(provider).then(result=>{}).catch(err=>console.error('No se ha podido iniciar sesión con ' + provider));

  }
  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(this.loginForm);
    if(!this.loginForm.invalid)
      this.loginService.getToken(value.username, value.pass).then(result=>{
        if(result)
          this.logueado.emit(true);
      });
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

}
