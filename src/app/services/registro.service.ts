import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BaseService } from "./base.service";
import { IRegistro } from '../interfaces/iregistro'
@Injectable()
export class RegistroService {

  constructor(private http: HttpClient, private base: BaseService) { }
  registrar(registro: IRegistro) {

    var registroPersonaAPI ={
      Nombre: registro.Username,
      Email: registro.Email,
    }
    var registroUsuarioAPI ={
      Nick: registro.Username
    }
    var registroClienteAPI ={
      Descripcion: registro.Username
    }	
    var a = {"us":{"Nick":"Organization"},"per":{"Nombre":"a"}};
//    var DTO = { 'us': registroUsuarioAPI, 'per': registroPersonaAPI, 'cli': registroClienteAPI, 'password': registro.Password };
    var DTO = { 'us': registroUsuarioAPI, 'per': registroPersonaAPI };
    return new Promise((resolve, reject) => {
      this.http.post(
        this.base.getPath('api/Registro/Registrar'),
        a,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        }
      ).subscribe(
        data => {
          resolve(true);
        },
        error => {
          reject(error);
        }
        );
    });


  }
}
