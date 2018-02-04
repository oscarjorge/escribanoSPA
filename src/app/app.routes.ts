import { RouterModule, Routes } from '@angular/router';



import { IndexPrivateComponent } from './components/private/index/index-private.component';

// import { AuthFireBaseService } from './services/authFireBase.service';
const APP_ROUTES: Routes = [
    { path: 'index_private', component: IndexPrivateComponent },
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
    
    { path: '**', pathMatch: 'full', redirectTo: 'index' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });