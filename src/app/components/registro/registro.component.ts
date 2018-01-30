import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IRegistro } from '../../interfaces/iregistro'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  registro: IRegistro = {
    Username: 'a',
    ConfirmPassword: 'aaaaaaaaaaaaaaaa',
    Password: 'aaaaaaaaaaaaaaaa',
    Email: 'a@a'
  };
  @Output() logueado = new EventEmitter();
  constructor(private registroService: RegistroService,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {

  }
  ngOnInit() {
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
      this.registroService.registrar(this.registro).then(r => {
        this.loginService.getToken(this.registro.Username, this.registro.Password).then(result => {
          if (result)
            this.logueado.emit(true);
        }).catch(r => {
          console.error('El usuario se ha registrado pero no ha sido posible iniciar sesión.');

        });
      }).catch(r => {
        console.error('Se ha producido un error y el usuario no se ha podido registrar.')
      })
    }

  }
}