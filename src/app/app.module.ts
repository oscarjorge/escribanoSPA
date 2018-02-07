import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CookieService} from 'angular2-cookie/core';
import { APP_ROUTING } from './app.routes';

import { BaseService } from './services/base.service';
import { LoginService } from './services/login.service';
import { RegistroService } from './services/registro.service';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { ContactoComponent } from './components/public/contacto/contacto.component';
import { LlamameComponent } from './components/public/llamame/llamame.component';
import { IndexComponent } from './components/public/index/index.component';
import { IndexPrivateComponent } from './components/private/index/index-private.component';
import { LoginRegistroComponent } from './components/login-registro/login-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegistroComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent,
    LlamameComponent,
    IndexComponent,
    IndexPrivateComponent,
    LoginRegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING,
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
  ],
  providers: [
    BaseService, 
    LoginService,
    RegistroService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
