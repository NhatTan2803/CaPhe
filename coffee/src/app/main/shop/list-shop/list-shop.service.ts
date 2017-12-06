import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { TokenService } from '../../../core/token.service';
import { CONFIG } from '../../../core/app.config';

@Injectable()
export class ListShopService {

  constructor(
    private _http: Http,
    private _tokenService: TokenService,
  ) { }

  private createHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token',this._tokenService.getToken(CONFIG.TOKEN));
    return headers
  }
  getListShop(){
    return this._http.get(CONFIG.BASE_API +'/shops/get-list',{headers: this.createHeaders()}).map(res=>res.json());
  }
  getProfileShop(){
    return this._http.get(CONFIG.BASE_API +'')
  }
  updateShop(dataShop: Object){
    return this._http.put(CONFIG.BASE_API + '/shops/update',dataShop,{headers: this.createHeaders()}).map(res=>res.json())
  }
}
