import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { TokenService } from '../core/token.service';
declare var toastr: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public user: Object = {
    user_fullname: '',
    user_permission:''

  }
  public idshop: number
  public Shopname: string=''
  public user_permission: string = ''
  constructor(
    private _mainService: MainService,
    private _tokenService: TokenService
  ) { }

  ngOnInit() {
    this.getProfile();
    //console.log(this.idshop)
    console.log(this.Shopname)
  }
  getProfile() {
    this._mainService.getProfile().subscribe(res => {
      if (res.status == 'error') {
        if (!res.isAuth) {
          this._mainService.tokenError();
        }
      }
      if (res.status == 'success') {

        this.user = res.user;
        this.user_permission = this.user['user_permission']
        this.idshop = this.user['user_shop_id']
        //this.getprofileShop();
        console.log(this.user_permission)
      }
    }, error => {
      console.log('loi roi')
      console.log(error);
    })
  }
  // getprofileShop(){
  //   let data = JSON.stringify({
  //     shop_id: this.user['user_shop_id']
  //   })
  //   this._mainService.getProfileShop(data).subscribe(res=>{
  //     if(res.status=='error')
  //     {
  //       console.log('error');
  //       return;
  //     }
  //     if(res.status =='success')
  //     {
  //       this.Shopname= res.shop['shop_name'];
  //       console.log(this.Shopname);
  //     }
  //   })
  // }
  logout(){
    this._mainService.logout();
    return;
  }
  
}
