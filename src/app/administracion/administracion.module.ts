import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{ SharedModule } from '../shared/shared.module'

import { TipoClenteComponent } from './components/tipo-clente/tipo-clente.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NavbarPrivateComponent } from './components/navbar-private/navbar-private.component'
import { IndexPrivateComponent } from './components/index/index-private.component'
import { Router } from '@angular/router/src/router';
import { PerfilComponent } from './components/perfil/perfil.component';

// import{ LoginRegistroComponent} from '../shared/components/login-registro/login-registro.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    IndexPrivateComponent,
    TipoClenteComponent, 
    PedidosComponent,
    NavbarPrivateComponent,
    PerfilComponent,
    // LoginRegistroComponent
  ]
})
export class AdministracionModule { }
