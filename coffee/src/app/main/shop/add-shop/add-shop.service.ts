import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {CONFIG} from '../../../core/app.config';
import {TokenService} from '../../../core/token.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AddShopService {

  constructor(
    private _tokenService: TokenService,
    private _http: Http
  ) { }
  private createHeaders(){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    headers.append('token',this._tokenService.getToken(CONFIG.TOKEN));
    return headers
  }
  getSystem(){
    return this._http.get(CONFIG.BASE_API+ '/systems/listsystem',{headers: this. createHeaders()}).map(res=>res.json());
  }
  addShop(data:Object){
    return this._http.post(CONFIG.BASE_API + '/shops/create',data,{headers: this.createHeaders()}).map(res=>res.json());
  }
}
