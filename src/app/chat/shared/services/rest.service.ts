import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginParam } from '../model/loginParam';
import { RestResult } from '../model/restResult';

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

  login(param: LoginParam): Observable<RestResult> {
    return this.http.post<RestResult>(APP_SERVER_URL + GET_TOKEN, param, httpOptions);
  }

}
