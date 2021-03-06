import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../pages/interfaces/user';
const url = environment.url;
@Injectable({
  providedIn: 'root',
})
export class LoginService {
   url = 'http://192.168.12.9:80/api/';
  name: string = null;
  token: string = null;
  email: string = null;
  rol: string;
  daots: false;
  doctors_id: string;
  uuid:any;
  _id:any;
  fitnes = 'https://www.googleapis.com/fitness/v1/users/me/dataSources'
  authToken:any;
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
  guardar_id(_id: any) {
    this._id = _id;
    localStorage.setItem('_id', _id);
  }

  leer_id() {
    if (localStorage.getItem('_id')) {
      this._id = localStorage.getItem('_id');
    } else {
      this._id = null;
    }
    return this._id;
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
  guardar_tokengoogle(authToken: string) {
    this.authToken = authToken;
    localStorage.setItem('google', authToken);
  }
  leer_tokengoogle() {
    if (localStorage.getItem('google')) {
      this.authToken = localStorage.getItem('google');
    } else {
      this.authToken = null;
    }
    return this.authToken;
  }
  getFitnes(token: any) {
    let cabecera = new HttpHeaders({'Authorization': `Bearer ${token}` });

  //  cabecera.set('Authorization',`Bearer ${token}` );
    
    console.log(cabecera);
    return this.http.get(`${this.fitnes}`, {
      headers: cabecera,
    });
  } 
}
