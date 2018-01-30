import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BaseService } from "./base.service";
import { IRegistro } from '../interfaces/iregistro'
@Injectable()
export class RegistroService {

  constructor(private http: HttpClient, private base: BaseService) { }
  registrar(registro: IRegistro) {
    return new Promise((resolve, reject) => {
      this.http.post(
        this.base.getPath('api/Registro'),
        registro,
        {}
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
