import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CONFIG } from '../../../core/app.config';
import { TokenService } from '../../../core/token.service';
import { MainService } from '../../main.service'
import 'rxjs/add/operator/map';
@Injectable()
export class ListStaffService {

  constructor(
    private _tokenService: TokenService,
    private _http: Http,
    private _mainService: MainService,
  ) { }
  private createHeaders() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('token', this._tokenService.getToken(CONFIG.TOKEN));
    return headers
  }
  getStaff(idShop: Object) {
    return this._http.post(CONFIG.BASE_API + '/boss/get-listStaff', idShop, { headers: this.createHeaders() }).map(res => res.json());
  }
}
