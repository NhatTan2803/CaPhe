import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { TokenService } from '../../../core/token.service';
import { CONFIG } from '../../../core/app.config'
import { MainService } from '../../../main/main.service'
@Injectable()
@Injectable()
export class ListDrinkService {

  constructor(
    private _http: Http,
    private _tokenService: TokenService,
    private _mainservice: MainService
  ) { }
  private createHeaders() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('token', CONFIG.TOKEN);
    return headers
  }
  getDrink(data: Object) {
    return this._http.post(CONFIG.BASE_API + '/drinks/get', data, { headers: this.createHeaders() }).map(res => res.json());
  }
}
