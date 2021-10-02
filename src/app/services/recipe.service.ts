import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = 'http://127.0.0.1:8000/api/'
  constructor(private http: HttpClient, private token:LoginService)  { }

  list(){
    return this.http.get(`${url}recipe?token=${this.token.leer_token()}`);
  }
  returnRecipe(uuid:any){
    window.open(`${url}recipe/pdf/${uuid}?token=${this.token.leer_token()}`)
  }
  DowenloadRecipe(uuid:any){
    window.open(`${url}recipe/download/${uuid}?token=${this.token.leer_token()}`)
  }
  getinquieries(){
    return this.http.get(`${url}inquiries?token=${this.token.leer_token()}`);
  }
  returnDiet(){
    window.open(`${url}diet/pdf?token=${this.token.leer_token()}`)
  }
  DowenloadDiet(){
    window.open(`${url}diet/download/pdf?token=${this.token.leer_token()}`)
  }
  historialget(uuid:any){
    window.open(`${url}exp/pdf/${uuid}?token=${this.token.leer_token()}`)
  }
  Dowenloadhistorial(uuid:any){
    window.open(`${url}exp/download/${uuid}?token=${this.token.leer_token()}`)
  }
}