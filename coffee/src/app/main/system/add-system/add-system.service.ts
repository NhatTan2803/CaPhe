import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { TokenService } from '../../../core/token.service';
import { CONFIG } from '../../../core/app.config'
@Injectable()
export class AddSystemService {

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
 addSystem(data: Object){
   return this._http.post(CONFIG.BASE_API + '/systems/create',data,{headers: this.createHeaders()}).map(res=>res.json());
 }
 getSystems(){
   return this._http.get(CONFIG.BASE_API +'/systems/listsystem',{headers: this.createHeaders()}).map(res=>res.json());
 }
 delSystem(system_id)
 {
   return this._http.delete(CONFIG.BASE_API + '/systems/del?system_id=' + system_id,{headers: this.createHeaders()}).map(res=>res.json());
 }
}
