import { Injectable } from '@angular/core';
import { TokenService } from "../../core/token.service";
import { CONFIG } from '../../core/app.config';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class StatisticService {

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
  profitDay(data: Object) {
    return this._http.post(CONFIG.BASE_API + '/boss/statistic-day', data, { headers: this.createHeaders() }).map(res => res.json())
  }
  profitWeek(data: Object) {
    return this._http.post(CONFIG.BASE_API + '/boss/statistic-week', data, { headers: this.createHeaders() }).map(res => res.json())
  }
  profitMonth(data: Object) {
    return this._http.post(CONFIG.BASE_API + '/boss/statistic-month', data, { headers: this.createHeaders() }).map(res => res.json())
  }
  countBill(data: Object) {
    return this._http.post(CONFIG.BASE_API + '/boss/count-bill', data, { headers: this.createHeaders() }).map(res => res.json())
  }
  countDrink(data: Object) {
    return this._http.post(CONFIG.BASE_API + '/boss/count-drink', data, { headers: this.createHeaders() }).map(res => res.json())
  }
}