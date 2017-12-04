import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { CONFIG } from './app.config';
import { Router } from '@angular/router'
@Injectable()
export class TokenService {

  constructor(
    private _router: Router
  ) { }
  // luu token vao trinh duyet
  setToken(name: string, value: string, expires?: number | Date) {
    Cookie.set(name, value, expires);
  }
  //lay token tu trinh duyet
  getToken(name: string): string {
    return Cookie.get(name);
  }

  //kiem tra token

  checkToken(name: string): boolean {
    return Cookie.check(name);
  }

  // xoa token
  deleteToken(name: string): void {
    Cookie.delete(name);
  }
  //loi token
  errorToken(): void {
    Cookie.delete(CONFIG.TOKEN);
    this._router.navigate(['login'])
  }
  logout(): void {
    Cookie.delete(CONFIG.TOKEN);
    this._router.navigate(['login'])
  }
}
