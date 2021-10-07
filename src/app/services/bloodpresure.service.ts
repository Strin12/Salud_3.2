import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Blood } from '../pages/interfaces/blood';
import { LoginService } from './login.service';
const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class BloodpresureService {
  constructor(private http: HttpClient, private token: LoginService) { }
  list(){
    return this.http.get(`${url}blood?token=${this.token.leer_token()}`);
  }
  insert(blood: any ) {
    return this.http.post(`${url}blood?token=${this.token.leer_token()}`, blood);
  }
  edit(uuid: string ){
    return this.http.get(`${url}blood/${uuid}?token=${this.token.leer_token()}`);

  }

  delete(uuid:string){
    return this.http.delete(`${url}blood/${uuid}?token=${this.token.leer_token()}`);

  }

  Update( blood: Blood){
    return this.http.put(`${url}blood/${blood.uuid}?token=${this.token.leer_token()}`, blood);

  }

}