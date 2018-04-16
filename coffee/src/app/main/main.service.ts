import { Injectable } from '@angular/core';
import { TokenService } from "../core/token.service";
import { CONFIG } from '../core/app.config';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MainService {

  constructor(
    private _tokenService: TokenService,
    private _http: Http
  ) { }

  private createHeaders(): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', this._tokenService.getToken(CONFIG.TOKEN));
    return headers;
  }
  getProfile(){
    return this._http.get(CONFIG.BASE_API + '/users/profile',{headers: this.createHeaders()}).map(res=>res.json());
  }
  getProfileShop(data:Object){
    return this._http.post(CONFIG.BASE_API +'/boss/get-name',data,{headers: this.createHeaders()}).map(res=>res.json())
  }
  tokenError(){
    this._tokenService.errorToken();
  }
  logout(){
    this._tokenService.logout();
  }
}
