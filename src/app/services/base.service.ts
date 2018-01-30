import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class BaseService {

  constructor() { 

  }
  ls: any = localStorage; 
  tokenStorage:string= 'escribano_token';
  getPath(path){
    //return "http://api.antonioescribano.es/" + path;
    return "http://localhost:2881/" + path;
  }
  getFormUrlEncoded(toConvert) {
		const formBody = [];
		for (const property in toConvert) {
			const encodedKey = encodeURIComponent(property);
			const encodedValue = encodeURIComponent(toConvert[property]);
			formBody.push(encodedKey + '=' + encodedValue);
		}
		return formBody.join('&');
  }
  
  getToken(){
    return localStorage.getItem(this.tokenStorage);
  }
  setToken(token){
    return localStorage.setItem(this.tokenStorage, token);
  }
  getHeaderToken(){
    return new HttpHeaders().set('Authorization', 'bearer ' + this.getToken())
  }
  isAuth(){
    return localStorage.getItem(this.tokenStorage)!=null;
  }
}
