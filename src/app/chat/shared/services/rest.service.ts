import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginParam } from '../model/loginParam';
import { LoginResult } from '../model/loginResult';
import { AccessResult } from '../model/accessResult';

const APP_SERVER_URL = 'http://localhost:8080/api';
const IM_SERVER_URL = 'http://localhost:8060/route';
const GET_TOKEN = '/user/login';
const GET_ACCESS_NODE = '/user/access';
const GET_USER_LIST = '/user/list';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  // app server.
  login(param: LoginParam): Observable<LoginResult> {
    return this.http.post<LoginResult>(APP_SERVER_URL + GET_TOKEN, param, httpOptions);
  }
  // app server.
  getUsers(): Observable<LoginResult> {
    return this.http.get<LoginResult>(APP_SERVER_URL + GET_USER_LIST);
  }
  // im server.
  getAccess(key: string, token: string): Observable<AccessResult> {
    let urlOptions = {
      headers: new HttpHeaders({ 'AppKey': key, 'Token': token})
    };
    return this.http.get<AccessResult>(IM_SERVER_URL + GET_ACCESS_NODE, urlOptions);
  }

  showErrorMsg(code: number): string {
    switch(code) {
      case 10101:
        return "Invalid Password";
      case 10102:
        return "Invalid Username";
      case 10103:
        return "User not found";
      case 10104:
        return "Password not match";
      case 10105:
        return "User disabled";
      case 11001:
        return "User id not exists";
      case 13001:
        return "App key is invalid";
      case 13002:
        return "Token cannot be made";
      case 13003:
        return "Token is invalid";
      default:
        return "Server error.";
    }
  }
}
