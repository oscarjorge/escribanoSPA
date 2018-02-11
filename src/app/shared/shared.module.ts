import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

import { LoginRegistroComponent} from './components/login-registro/login-registro.component';

import { BaseService } from './services/base.service';
import { LoginService } from './services/login.service';
import { RegistroService } from './services/registro.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    LoginRegistroComponent
  ],
  declarations: [
    LoginRegistroComponent
  ],
  providers: [
    BaseService, 
    LoginService,
    RegistroService,
    CookieService,
    AuthService,
    AuthGuardService,
    RoleGuardService
  ],
})
export class SharedModule { }
