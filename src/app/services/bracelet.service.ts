import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class BraceletService {

  constructor(private http: HttpClient, private token: LoginService) { }

  list(){
    return this.http.get(`${url}bracelet?token=${this.token.leer_token()}`);
  }
  insert(blood: any ) {
    return this.http.post(`${url}bracelet?token=${this.token.leer_token()}`, blood);
  }
}
