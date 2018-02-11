import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from "./base.service";
@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private base: BaseService) {

  }
  getToken(username: string, pass: string) {
    return new Promise((resolve, reject) => {
      const body = { grant_type: "password", username: username, password: pass };
      this.http.post(
        this.base.getPath('token'),
        this.base.getFormUrlEncoded(body),
        {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        }
      ).subscribe(data => {
        localStorage.setItem('escribano_token', data['access_token']);
        resolve(true);
      });
    });
  }
  loginSocialNetwork(provider: string) {
    return new Promise((resolve, reject) => {
      let Params = new HttpParams();

    // Begin assigning parameters
    Params = Params.append('provider', provider);
    
      this.http.get(
        this.base.getPath('api/login/externalLogin'),
        {
          params: Params,
          //headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*'),
          //responseType: 'text'
        }
      ).subscribe(data => {
        console.log(data);
        
        resolve(true);
      },
      error=>{
        console.error('peta');
        reject(error);
        
      }
    )
    });

  }

  authorizeAdmin() {
   
    return this.http.post(
      this.base.getPath('api/token/authorizeAdmin'),
      {},
      {
        headers: this.base.getHeaderToken(),
      }
    ).toPromise();

  }
  logOut() {
    localStorage.removeItem(this.base.tokenStorage);
  }
  getInformationUser(){
    return this.http.get(
      this.base.getPath('api/login/getInformationUser'),
      
      {
        headers: this.base.getHeaderToken(),
      }
    ).toPromise();
  }
}
// $.ajax({
    //   url: "http://localhost:2881/api/token/AuthorizeAdmin",
    //   crossDomain :true,
    //   type:'POST',
    //   contentType : 'application/x-www-form-urlencoded',
    //   headers: { 
    //     Authorization : "bearer L1SON4DcNm_OtLQZ7YMQqiqm2Gmuv7MB3icMe8n-zYdJJeT0IC4n6o9YdrrMcaj4Rn9D6xhTG2n2vhJA4HIUMUIlRWb8mmAD8bavWDb83x2_DMnR_z0HS1pemdB4hjskfAtbro11vh8zd7iDVOyjT0u0gHN-r1ESiKqn5yQY73cd0g9BRS24PNceqpMzb9up7qqoS6e6bF0gCKefhmY6kT7FnBA1kU1zuM4Gl5ZOqO_Jwz5NFnWSMXDltBsgrphL4V8e2WQ9IcCTxb5lyeSNiA",
    // },
    //   // beforeSend: function(xhr){
    //   //   xhr.setRequestHeader('Authorization', 'bearer PP5PofNxrR3vm-5ejNsPBnNIkA28_2MZpCdeJcb8o3dQMXZQcPEnvoRbKXAU1FW8JNthXjpxV0CPJVLEQ--6A_6OSCJdXAtzuojfZ1hMBJ4s3iLxXDgMYBP5AX1ObxSyOp0GuXxTRUTn6W93XkHxOA6J9TbVhw0q8gm-lz0Wn39teg9w8-93bPgjIeArIt0SU79N3zs5RsPewiGwapmaQ_hqzLf8I9tPq5UdU2buIXmF5MqztDlFtFt0fwHZD9ifj48dEZnCr9YLQcZbnRlKuKjrWZ9laY-KzK0zLwTuO1A');
    //   // },
    //   success:  function (response) {
    //     console.log("success");
    //   },

    // })




    // const body = {grant_type: "password",username:"a", password:"a"};
    // $.ajax({
    //   url: "http://localhost:2881/token",
    //   type:'POST',
    //   contentType : 'application/x-www-form-urlencoded',
    //   data: this.getFormUrlEncoded(body),
    //   headers:{
    //     'Content-Type':'application/x-www-form-urlencoded'
    //   },
    //   success:  function (response) {
    //     console.log(response);
    //   },
    //   error:function(a, b, c){
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);

    //   }
    // })