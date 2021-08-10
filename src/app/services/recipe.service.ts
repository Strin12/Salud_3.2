import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = 'http://127.0.0.1:8000/api/'
  constructor(private http: HttpClient, private token:LoginService)  { }

  list(){
    return this.http.get(`${this.url}recipe?token=${this.token.leer_token()}`);
  }
  returnRecipe(uuid:any){
    window.open(`${this.url}recipe/pdf/${uuid}?token=${this.token.leer_token()}`)
  }
  DowenloadRecipe(uuid:any){
    window.open(`${this.url}recipe/download/${uuid}?token=${this.token.leer_token()}`)
  }
  getinquieries(){
    return this.http.get(`${this.url}inquiries?token=${this.token.leer_token()}`);
  }
  returnDiet(){
    window.open(`${this.url}diet/pdf?token=${this.token.leer_token()}`)
  }
  DowenloadDiet(){
    window.open(`${this.url}diet/download/pdf?token=${this.token.leer_token()}`)
  }
  historialget(uuid:any){
    window.open(`${this.url}exp/pdf/${uuid}?token=${this.token.leer_token()}`)
  }
  Dowenloadhistorial(uuid:any){
    window.open(`${this.url}exp/download/${uuid}?token=${this.token.leer_token()}`)
  }
}