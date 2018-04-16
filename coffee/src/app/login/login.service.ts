import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { CONFIG } from "../core/app.config";
@Injectable()
export class LoginService {

  constructor(
    private _http: Http,
  ) { }
  private createHeaders(): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
  login(email: string, password: string) {
    return this._http.post(CONFIG.BASE_API + '/users/login', JSON.stringify({
      user_email: email,
      user_password: password 
    }), { headers: this.createHeaders() }).map(res => res.json())
  }

}
