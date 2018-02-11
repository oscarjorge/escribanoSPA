import { RouterModule, Routes } from '@angular/router';
import { AdministracionModule } from './administracion/administracion.module'


import { IndexPrivateComponent } from './administracion/components/index/index-private.component';
import { IndexComponent } from './components/public/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

import { TipoClenteComponent } from './administracion/components/tipo-clente/tipo-clente.component';
import { PedidosComponent } from './administracion/components/pedidos/pedidos.component';
import { PerfilComponent } from './administracion/components/perfil/perfil.component';

import { AuthGuardService as AuthGuard } from './shared/services/auth-guard.service'
import { RoleGuardService as RoleGuard } from './shared/services/role-guard.service';
// import { BaseService } from './services/base.service';

const APP_ROUTES: Routes = [
    { path: 'index_public', component: IndexComponent },

    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    {canActivate: [AuthGuard], path: 'index_private', component: IndexPrivateComponent },
    { path: 'tipoClientes', component: TipoClenteComponent, canActivate: [RoleGuard] },
    { canActivate: [AuthGuard], path: 'pedidos', component: PedidosComponent },
    { canActivate: [AuthGuard], path: 'perfil', component: PerfilComponent },

    // { path: 'home', component: HomeComponent },
    // { path: 'jugadores', component: JugadoresComponent },
    // { path: 'jugador/:id', component: JugadorComponent },
    // { canActivate: [AuthFireBaseService], path: 'editarJugador/:id', component: EdicionJugadorComponent },
    // { canActivate: [AuthFireBaseService], path: 'perfil/:id', component: PerfilComponent },
    // { path: 'equipos', component: EquiposComponent },
    // { path: 'equipoDetalle/:id', component: EquipoDetalleComponent },
    // { path: 'camposviewmap', component: CamposViewMapComponent },
    // { canActivate: [AuthFireBaseService],path: 'partido/:id', component: PartidoDetalleComponent },
    // { 
    //     canActivate: [AuthFireBaseService], 
    //     path: 'administracion', 
    //     component: AdministracionMainComponent,
    //     children:[
    //         {  path: 'sedes', component: SedesComponent },
    //         {  path: 'grupos', component: GruposComponent },
    //         {  path: 'divisiones', component: DivisionesComponent },
    //         {  path: 'torneos', component: TorneoComponent },
    //         {  path: 'partidos', component: PartidosComponent },
    //         {  path: 'campos', component: CamposComponent },
    //         {  path: 'editarResultado/:id', component: ResultadoEditarComponent },
    //     ]
    // },

    // { canActivate: [AuthFireBaseService], path: 'editarEquipo/:id', component: EdicionEquipoComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'index_public' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });