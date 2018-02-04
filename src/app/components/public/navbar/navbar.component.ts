import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() mostrarLogin = new EventEmitter();
  @Output() mostrarRegistro = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  emitMostrarLogin(){
    this.mostrarLogin.emit(true);
  }
  emitMostrarRegistro(){
    this.mostrarRegistro.emit(true);
  }
}
