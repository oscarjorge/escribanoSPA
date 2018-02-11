import { Injectable } from '@angular/core';
import {BaseService} from './base.service'

@Injectable()
export class AuthService {
  constructor(public baseService: BaseService) { }

  // ...
  public isAuthenticated(): boolean {
    
    const token = localStorage.getItem(this.baseService.tokenStorage);

    if (token != null)
      return true;
    else
      return false;
  }
  
}