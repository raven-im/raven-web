import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginParam } from '../model/loginParam';
import { AccessParam } from '../model/accessParam';
import { LoginResult } from '../model/loginResult';
import { AccessResult } from '../model/accessResult';

const APP_SERVER_URL = 'http://localhost:9080/api';
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
    return this.http.get<LoginResult>(APP_SERVER_URL + GET_TOKEN);
  }
  // im server.
  getAccess(param: AccessParam): Observable<AccessResult> {
    return this.http.post<AccessResult>(IM_SERVER_URL + GET_ACCESS_NODE, param, httpOptions);
  }
}
