import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BaseService } from './services/base.service';
import { LoginService } from './services/login.service';
import { RegistroService } from './services/registro.service';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistroComponent } from './components/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
  ],
  providers: [
    BaseService, 
    LoginService,
    RegistroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
