import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { LoginService } from './services/login.service';

import { GlobalApp } from '../helpers/global';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GlobalApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
