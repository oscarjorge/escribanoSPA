import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import{ AdministracionModule } from './administracion/administracion.module'
import{ SharedModule } from './shared/shared.module'


import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { ContactoComponent } from './components/public/contacto/contacto.component';
import { LlamameComponent } from './components/public/llamame/llamame.component';
import { IndexComponent } from './components/public/index/index.component';
//import { LoginRegistroComponent } from './shared/components/login-registro/login-registro.component';
import { CarouselComponent } from './components/public/carousel/carousel.component';
import { CarouselBotellasComponent } from './components/public/carousel-botellas/carousel-botellas.component';
import { NuestrosVinosComponent } from './components/public/nuestros-vinos/nuestros-vinos.component';


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
    //LoginRegistroComponent,
    CarouselComponent,
    CarouselBotellasComponent,
    NuestrosVinosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    APP_ROUTING,
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
    AdministracionModule,
    SharedModule
  ],
  providers: [

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
