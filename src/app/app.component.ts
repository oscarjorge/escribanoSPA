import { Component } from '@angular/core';
import { BaseService} from "./services/base.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private base:BaseService, private router: Router) { 
    this.router.navigate(['index_public']);
  }
  ngOnInit() {
    
  }
  
}
