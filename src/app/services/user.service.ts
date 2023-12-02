import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API: string = 'http://localhost:8080/user';
  http = inject(HttpClient);

  constructor() { }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.API + '/login', user);
  }


  // listAll(): Observable<User[]> {
  //   return this.http.get<User[]>(this.API);
  // }

  // save(user: User): Observable<User> {
  //   if (user.id !== undefined){
  //     return this.http.put<User>(this.API + '/editar/' + user.id, user);
  //   }

  //   return this.http.post<User>(this.API, user);
  // }



  // Metodos do token

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }


  // jwtDecode() {
  //   let token = this.getToken();
  //   if (token) {
  //     return this.jwtDecode<JwtPayload>(token);
  //   }
  //   return "";
  // }

  // hasPermission(role: string) {
  //   let Usuario = this.jwtDecode() as User;
  //   if (Usuario.role == role)
  //     return true;
  //   else
  //     return false;
  // }

}
