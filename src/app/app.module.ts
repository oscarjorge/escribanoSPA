import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

import { BaseService } from './services/base.service';
import { LoginService } from './services/login.service';
import { RegistroService } from './services/registro.service';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LlamameComponent } from './components/llamame/llamame.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegistroComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent,
    LlamameComponent
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
