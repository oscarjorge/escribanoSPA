import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {GlobalApp} from '../../../helpers/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private loginService: LoginService, public app: GlobalApp) { 
   
  }
  username: string;
  pass: string;

  ngOnInit() {
    
    // const body = {grant_type: "password",username:"a", password:"a"};
    // this.http.post(
    //   'http://localhost:2881/token', 
    //   this.getFormUrlEncoded(body),
    //   {
    //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    //   }    
    // ).subscribe(data => {
    //   console.log(data)
    //   // Read the result field from the JSON response.
    //   this.results = data['results'];
    // });

    //let header = new HttpHeaders({'Authorization': 'bearer sAeoayijFjvsPW8u5EMoL39LwAAPsw9skXdYmKchRD5TZCXEZjLni6qYTYXhd1ObVNYMHEzx-kHeCyqIXcCsbjryH9gDOfz81UnD32mZ6vfTWwLAjqV_aJ3gFVjt5hNdnOte2JpNQYlE70TGIn4GysSsEOpvhZ1yjv6ed3oXT3kZrK3OZZhZSqPV-4AUuVcZ4jH_gPM-uShjmxoX4eZYW41tVKaEf7rocS3MUaqkIkzkXzgf31s7qizoRJN5Ul2pbvbreevUXk5DBMSg8Y7iLZ_X8kTgg3GU7wTYMBxucqw'});
    //header = header.set('Authorization', 'bearer sAeoayijFjvsPW8u5EMoL39LwAAPsw9skXdYmKchRD5TZCXEZjLni6qYTYXhd1ObVNYMHEzx-kHeCyqIXcCsbjryH9gDOfz81UnD32mZ6vfTWwLAjqV_aJ3gFVjt5hNdnOte2JpNQYlE70TGIn4GysSsEOpvhZ1yjv6ed3oXT3kZrK3OZZhZSqPV-4AUuVcZ4jH_gPM-uShjmxoX4eZYW41tVKaEf7rocS3MUaqkIkzkXzgf31s7qizoRJN5Ul2pbvbreevUXk5DBMSg8Y7iLZ_X8kTgg3GU7wTYMBxucqw');
    //  this.http.post(
    //   //'http://api.antonioescribano.es/api/token/AuthorizeAdmin', 
    //   'http://localhost:2881/api/token/AuthorizeAdmin',
    //   {},
    //   {
    //     headers: new HttpHeaders().set('Authorization', 'bearer L1SON4DcNm_OtLQZ7YMQqiqm2Gmuv7MB3icMe8n-zYdJJeT0IC4n6o9YdrrMcaj4Rn9D6xhTG2n2vhJA4HIUMUIlRWb8mmAD8bavWDb83x2_DMnR_z0HS1pemdB4hjskfAtbro11vh8zd7iDVOyjT0u0gHN-r1ESiKqn5yQY73cd0g9BRS24PNceqpMzb9up7qqoS6e6bF0gCKefhmY6kT7FnBA1kU1zuM4Gl5ZOqO_Jwz5NFnWSMXDltBsgrphL4V8e2WQ9IcCTxb5lyeSNiA'),
    //   }    
    // ).subscribe(data => {
    //   console.log(data);
    //   // Read the result field from the JSON response.
    //   this.results = data['results'];
    // });
  }
  getToken(e){
    e.preventDefault();
    console.log(this.username);
    this.loginService.getToken(this.username, this.pass);
  }
}
