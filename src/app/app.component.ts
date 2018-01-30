import { Component } from '@angular/core';
import { BaseService} from "./services/base.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mostrarLogin:boolean=false;
  mostrarRegistro:boolean=false;
  mostrarBotonesLoginRegistro:boolean=false;
  constructor(private base:BaseService) { 
    
  }
  recienLogado(e){
    this.mostrarLogin=false;
    this.mostrarRegistro=false;
    this.mostrarBotonesLoginRegistro=false;
  }
}
