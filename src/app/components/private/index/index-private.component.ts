import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-index-private',
  templateUrl: './index-private.component.html',
  styleUrls: ['./index-private.component.css']
})
export class IndexPrivateComponent implements OnInit {
  @Output() esconder = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  
}
