import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { TokenService } from '../core/token.service'
import { Router } from '@angular/router';
import { CONFIG } from '../core/app.config';

declare var toastr: any;
declare var $: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = ''
  public password: string = ''
  constructor(
    private _tokenService: TokenService,
    private _router: Router,
    private _loginService: LoginService
  ) { }

  ngOnInit() {
    this.checkedToken();
  }
  checkedToken() {
    if (this._tokenService.checkToken(CONFIG.TOKEN) == true) {
      this._router.navigate(['main']);
      return;
    }
  }
  login() {
    if (this.email === '') {
      toastr.warning('Ban Chua Nhap Email', 'Thong Bao');
      $('#email').focus()
      return;
    }
    var email = this.email, atpos = email.indexOf("@"), dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      toastr.warning('Email không hợp lệ', 'Thông báo');
      return false;
    }
    if (this.password === '') {
      toastr.warning('Bạn chưa nhập mật khẩu', 'Thông báo');
      $('#password').focus();
      return false;
    }
    this._loginService.login(this.email, this.password).subscribe(res => {
      if (res.status == 'error') {
        toastr.error('Tài khoản không tồn tại');
        return;
      }
      if (res.status == 'success') {

        toastr.success(res.message);
        console.log(res.user['user_name']);
        this._tokenService.setToken(CONFIG.TOKEN, res.token);
        this._router.navigate(['main']);
      }
    }, error => {
      console.log(error);
    })
  }

}
