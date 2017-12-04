import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { CONFIG } from '../../core/app.config';
import {MainService} from '../main.service';
@Injectable()
export class BuyService {

  constructor(
    private _http: Http,
    private _mainService:MainService
  ) { }
  private createHeaders() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('token', CONFIG.TOKEN);
    return headers
  }
  getDrinks(data:Object) {
    return this._http.post(CONFIG.BASE_API + '/drinks/get',data,{ headers: this.createHeaders()}).map(res => res.json());
  }
  getIdShop(){
    return this._mainService.getProfile();
  }
  getContent() {
    const tan = sessionStorage.getItem('giohang');
    if (tan) {
      const sanpham = JSON.parse(tan)
      return sanpham;
    } else {
      return null;
    }
  }
  Pay(databill) {
    return this._http.post(CONFIG.BASE_API + '/detail-bill/create', databill, { headers: this.createHeaders() }).map(res => res.json());
  }
  addBill(databill){
    return this._http.post(CONFIG.BASE_API + '/bills/create', databill, { headers: this.createHeaders() }).map(res => res.json());
    
  }
}
