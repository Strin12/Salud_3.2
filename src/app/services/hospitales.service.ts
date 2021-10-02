import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/services/login.service';
const url = environment.url
@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  constructor(private http: HttpClient, private token: LoginService) {}

list(){
  return this.http.get(`${url}hospitals?token=${this.token.leer_token()}`);
}




}
