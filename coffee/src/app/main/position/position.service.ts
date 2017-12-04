import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { TokenService } from '../../core/token.service';
import { CONFIG } from '../../core/app.config'
import {MainService} from '../../main/main.service'
@Injectable()
export class PositionService {

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
  getIdShop()
  {
    return this._mainservice.getProfile();
  }
  addPosition(data: Object) {
    return this._http.post(CONFIG.BASE_API + '/positions/create', data, { headers: this.createHeaders() }).map(res => res.json());
  }
  getPositions(data: Object) {
    return this._http.post(CONFIG.BASE_API + '/positions/list-position',data ,{ headers: this.createHeaders() }).map(res => res.json());
  }
  delPosition(position_id) {
    return this._http.delete(CONFIG.BASE_API + '/positions/del?position_id=' + position_id, { headers: this.createHeaders() }).map(res => res.json());
  }
  
}
