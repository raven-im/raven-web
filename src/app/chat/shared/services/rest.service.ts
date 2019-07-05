import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginParam } from '../model/loginParam';
import { LoginResult } from '../model/loginResult';
import { AccessResult } from '../model/accessResult';
import { UsersResult } from '../model/usersResult';
import { UserDetailResult } from '../model/usersDetailResult';
import { environment } from 'environments/environment';
import { FileUploadMetaResult } from '../model/fileUploadMetaResult';
import { FileUploadResult } from '../model/fileUploadResult';
import { FileUploadQiniuResult } from '../model/fileUploadQiniuResult';
import { PortraitParam } from '../model/portraitParam';
import { CommonResult } from '../model/commonResult';

const GET_TOKEN = '/user/login';
const GET_ACCESS_NODE = '/user/access/web'; 
const GET_USER_LIST = '/user/list';
const GET_USER_DETAIL = '/user/';
const UPLOAD_FILE = '/upload';
const GET_FILE_META_DATA = '/upload/meta';
const PORTRAIT_SUFFIX = '/portrait';
const QINIU_UPLOAD = '/qiniu_upload';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  // app server.
  login(param: LoginParam): Observable<LoginResult> {
    return this.http.post<LoginResult>(environment.APP_SERVER_URL + GET_TOKEN, param, httpOptions);
  }
  // app server.
  getUsers(): Observable<UsersResult> {
    return this.http.get<UsersResult>(environment.APP_SERVER_URL + GET_USER_LIST + '?type=1');
  }

  getUserDetail(uid: string): Observable<UserDetailResult> {
    return this.http.get<UserDetailResult>(environment.APP_SERVER_URL + GET_USER_DETAIL + uid);
  }

  updateUserPortrait(uid: string , param: PortraitParam): Observable<CommonResult> {
    return this.http.post<CommonResult>(environment.APP_SERVER_URL + GET_USER_DETAIL + uid, param, httpOptions);
  }

  // im server.
  getAccess(key: string, token: string): Observable<AccessResult> {
    let urlOptions = {
      headers: new HttpHeaders({ 'AppKey': key, 'Token': token})
    };
    return this.http.get<AccessResult>(environment.IM_SERVER_URL + GET_ACCESS_NODE, urlOptions);
  }

  uploadFile(file: File): Observable<FileUploadResult> {
    let token = localStorage.getItem("token");
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    let urlOptions = {
      headers: new HttpHeaders({'Token': token})
    };
    return this.http.post<FileUploadResult>(environment.IM_SERVER_URL + UPLOAD_FILE, formData, urlOptions);
  }

  getQiniuUploadToken(suffix: string): Observable<FileUploadQiniuResult> {
    return this.http.get<FileUploadQiniuResult>(environment.APP_SERVER_URL + QINIU_UPLOAD + "?suffix=" + suffix);
  }

  getFileMeta(group: string, path: string): Observable<FileUploadMetaResult> {
    let token = localStorage.getItem("token");
    const params = new HttpParams();
    params.set('group', group);
    params.set('path', path);

    let urlOptions = {
      headers: new HttpHeaders({'Token': token}),
      params: params
    };
    return this.http.get<FileUploadMetaResult>(environment.IM_SERVER_URL + GET_FILE_META_DATA, urlOptions);
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
