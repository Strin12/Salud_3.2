import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Domicilio } from '../pages/interfaces/domicilio';
import { LoginService } from './login.service';
const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class DomicilieService {

  
  constructor(private http: HttpClient,private token: LoginService) { }
  list(id_persons:any){
    return this.http.get(`${url}dom/${id_persons}?token=${this.token.leer_token()}`);
  }

  insert(domicile: any ) {
    return this.http.post(`${url}domicile?token=${this.token.leer_token()}`, domicile);
  }
  edit(uuid: string ){
    return this.http.get(`${url}domicile/${uuid}?token=${this.token.leer_token()}`);

  }

  delete(uuid:string){
    return this.http.delete(`${url}domicile/${uuid}?token=${this.token.leer_token()}`);

  }

  Update( domicilio: Domicilio){
    return this.http.put(`${url}domicile/${domicilio.uuid}?token=${this.token.leer_token()}`, domicilio);

  }
}
