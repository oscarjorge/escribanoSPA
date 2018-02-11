import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from '../../../shared/services/base.service'
import { Menu } from '../../menu';
@Component({
  selector: 'app-navbar-private',
  templateUrl: './navbar-private.component.html',
  styleUrls: ['./navbar-private.component.css']
})
export class NavbarPrivateComponent implements OnInit {
menus: Menu[]
  constructor(private http: HttpClient, private base: BaseService,private router: Router) { 

  }

  ngOnInit() {
    this.GetMenu().then(data=>{
      this.menus = <Menu[]>data;
      console.log(this.menus)
    }).catch(e=>{
      console.log(e);
    })
  }
  GetMenu() { 
    return this.http.get(
      this.base.getPath('api/menu/GetMenus'),
      {
        headers: this.base.getHeaderToken(),
      }
    ).toPromise();
  }
}
