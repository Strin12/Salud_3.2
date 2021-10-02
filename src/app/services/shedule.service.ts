import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Shedule } from '../pages/interfaces/shedule';
import { LoginService } from './login.service';
const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class SheduleService {

  constructor(private http: HttpClient, private token: LoginService) { }
  list(){
    return this.http.get(`${url}shedule?token=${this.token.leer_token()}`);
  }

  insert(inquiries: any ) {
    return this.http.post(`${url}shedule?token=${this.token.leer_token()}`, inquiries);
  }
  edit(uuid: string ){
    return this.http.get(`${url}shedule/${uuid}?token=${this.token.leer_token()}`);

  }

  delete(uuid:string){
    return this.http.delete(`${url}shedule/${uuid}?token=${this.token.leer_token()}`);

  }

  Update( shedule: Shedule){
    return this.http.put(`${url}recipe/${shedule.uuid}?token=${this.token.leer_token()}`, shedule);

  }
}