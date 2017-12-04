import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { TokenService } from '../../core/token.service';
import { CONFIG } from '../../core/app.config'
@Injectable()
export class AccountService {

  constructor(
    private _http: Http,
    private _tokenService: TokenService,
  ) { }
  private createHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', this._tokenService.getToken(CONFIG.TOKEN));
    return headers;
  }
  getAccount(){
    return this._http.get(CONFIG.BASE_API + '/users/listaccount',{headers:this.createHeaders()}).map(res=>res.json());
  }
}
