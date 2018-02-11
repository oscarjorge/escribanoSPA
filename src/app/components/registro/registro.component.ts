import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from '../../shared/services/registro.service'
import { LoginService } from '../../shared/services/login.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IRegistro } from '../../shared/interfaces/iregistro'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnDestroy {

  registroForm: FormGroup;
  registro: IRegistro = {
    Username: 'a',
    ConfirmPassword: 'aaaaaaaaaaaaaaaa',
    Password: 'aaaaaaaaaaaaaaaa',
    Email: 'oscarjorgecastillo@gmail.com'
  };
  constructor(private registroService: RegistroService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {

  }
  ngOnDestroy(){
    document.querySelector('body').classList.remove('background-login');
  }
  ngOnInit() {
    document.querySelector('body').classList.add('background-login');
    this.registroForm = new FormGroup({
      username: new FormControl(this.registro.Username, Validators.required),
      email: new FormControl(this.registro.Email, [
        Validators.required,
        Validators.email
      ]),
      pass: new FormControl(this.registro.Password, [
        Validators.minLength(8),
        Validators.required
      ]),
      confirmpass: new FormControl(this.registro.ConfirmPassword, [
        Validators.minLength(8),
        Validators.required
      ])
    });
  }
  submitForm(value: any): void {
    if (!this.registroForm.invalid) {
      console.log(this.registro)
      this.registroService.registrar(this.registro).then(data => {
        var mensaje = data;
        if (mensaje == '' || mensaje == null) {
            alert("¡¡¡El usuario ha sido creado!!!. Por su seguridad se ha enviado un correo electrónico a la cuenta introducida para confirmar el registro. ");
            this.router.navigate(["index_public"])
        }
        else
            alert(mensaje);        
      }).catch(r => {
        console.error('Se ha producido un error y el usuario no se ha podido registrar.')
      })
    }

  }
  salir(){
    this.router.navigate(["index_public"])
  }
}
