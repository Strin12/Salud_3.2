import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../pages/interfaces/user';
const url = environment.url;
@Injectable({
  providedIn: 'root',
})
export class LoginService {
   url = 'http://127.0.0.1:8000/api/';
  name: string = null;
  token: string = null;
  email: string = null;
  rol: string;
  daots: false;
  doctors_id: string;
  uuid:any;
  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post(`${url}verificar`, user);
  }
  edit(uuid: string ){
    return this.http.get(`${url}patients/${uuid}?token=${this.leer_token()}`);

  }
  Update( users: User){
    return this.http.put(`${url}patients/${users.uuid}?token=${this.leer_token()}`, users);

  }
  valid_token() {
    let cabecera = new HttpHeaders({
      Authorization: `Bearer ${this.leer_token()}`,
    });

    return this.http.get(`${url}token`, {
      headers: cabecera,
    });
  }
  guardar_token(idtoken: any) {
    localStorage.setItem('token', idtoken);
  }

  leer_token() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = null;
    }
    return this.token;
  }
  guardar_nombre(name: string) {
    this.name = name;
    localStorage.setItem('name', name);
  }

  leer_nombre() {
    if (localStorage.getItem('name')) {
      this.name = localStorage.getItem('name');
    } else {
      this.name = null;
    }
    return this.name;
  }
  guardar_uuid(uuid: any) {
    this.uuid = uuid;
    localStorage.setItem('uuid', uuid);
  }

  leer_uuid() {
    if (localStorage.getItem('uuid')) {
      this.uuid = localStorage.getItem('uuid');
    } else {
      this.uuid = null;
    }
    return this.uuid;
  }
  guardar_email(email: string) {
    this.email = email;
    localStorage.setItem('email', email);
  }

  leer_email() {
    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');
    } else {
      this.email = null;
    }
    return this.email;
  }

  guardar_rol(name: string) {
    this.rol = name;
    localStorage.setItem('rol', name);
  }
  leer_rol() {
    if (localStorage.getItem('rol')) {
      this.email = localStorage.getItem('rol');
    } else {
      this.email = null;
    }
    return this.email;
  }
}
