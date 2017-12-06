import { Component, OnInit } from '@angular/core';
import { AccountService } from "./account.service";
import { MainService } from '../../main/main.service';
import { CONFIG } from '../../core/app.config';
import { ListShopService } from '../shop/list-shop/list-shop.service'
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  // public position_name: string = '';
  public folder_avatar: string = CONFIG.BASE_API + '/uploads/imgBoss/';
  public boss_id: number;
  public boss_avatar: string = '';
  public boss_name: string = '';
  public boss_password: string = '';
  public boss_shop: number;
  public boss_email: string = '';
  public boss_Idcard: string = ''; // cách đưa ngày tháng thành chuỗi
  public boss_sex: string;
  public boss_phone: string = '';
  public boss_address: string = '';
  public boss_active: string

  public list_account: Array<any> = [];
  public list_shop: Array<any> = [];
  public newPassword: string = ''
  constructor(
    private _accountService: AccountService,
    private _mainService: MainService,
    private _listshopService: ListShopService
  ) { }

  ngOnInit() {
    this.getAccount();
  }
  uploadImg(e) {
    var formData = new FormData();
    formData.append('avatar', e.target.files["0"]);
    $.ajax({
      url: CONFIG.BASE_API + '/shop/upload-imgBoss',
      type: 'POST',
      data: formData,
      processData: false,  // tell jQuery not to process the data
      contentType: false,  // tell jQuery not to set contentType
      success: (data) => {
        if (data.status == 'success') {
          toastr.success(data.message);
          this.boss_avatar = data.imgBoss;
          return;
        }
        if (data.status === 'error') {
          console.log(data);
        }
      }
    })
  }
  getAccount() {
    this._accountService.getAccount().subscribe(res => {
      if (res.status === 'success') {
        console.log(res);
        this.list_account = res.account;
      }
      if (res.status === 'error') {
        toastr.error(res.message);
        return;
      }
    }, error => {
      toastr.warning('Không kết nối được tới Server');
      return;
    });
  }
  changePassword() {
    if (this.newPassword == '') {
      toastr.warning('Chưa nhập mật khẩu');
      return;
    }
    if ($('#boss-Vpassword').val() === '') {
      toastr.warning('Chưa nhập mật khẩu xác nhận');
      return;
    }
    if ($('#boss-Vpassword').val() == this.newPassword) {
      let pass = JSON.stringify({
        boss_id: this.boss_id,
        boss_password: this.newPassword
      })
      console.log(pass)
      this._accountService.changPassword(pass).subscribe(res => {
        if (res.status == 'error') {
          return console.log('error')
        }
        if (res.status == 'success') {
          toastr.success(res.message);
          this.newPassword = '';
          $('#boss-Vpassword').val('');
          $('#boss-Npassword').focus()
          return;
        }
      })
    }
    else {
      toastr.warning('Mật khẩu không khớp');
      return;
    }
  }
  selectAccount(account) {
    console.log(account),
      this.boss_id = account['user_id'],
      this.boss_avatar = account['user_avatar'],
      this.boss_name = account['user_name'],
      this.boss_shop = account['user_shop'],
      this.boss_Idcard = account['user_Idcard'],
      this.boss_email = account['user_email'],
      this.boss_phone = account['user_phone'],
      this.boss_address = account['user_address'],
      this.boss_active = account['user_active'],
      this.boss_shop = account['user_shop_id']
      this._listshopService.getListShop().subscribe(res => {
        if (res.status == 'error') {
          console.log('error')
          return;
        }
        if (res.status == 'success') {
          this.list_shop = res.shops;
          console.log('danh sach shop');
          console.log(this.list_shop)
        }
      })
  }
  updateProfile() {
    console.log('update')
    let newPorfile = JSON.stringify({
      boss_id: this.boss_id,
      boss_avatar: this.boss_avatar,
      boss_name: this.boss_name,
      boss_password: this.boss_password,
      boss_shop: this.boss_shop,
      boss_Idcard: this.boss_Idcard,
      boss_email: this.boss_email,
      boss_phone: this.boss_phone,
      boss_address: this.boss_address,
      boss_active: this.boss_active,
    })
    console.log(newPorfile)
    this._accountService.updateProfile(newPorfile).subscribe(res => {
      if (res.status == 'error') {
        console.log('error');
        return;
      }
      if (res.status == 'success') {
        toastr.success(res.message);
        this.getAccount();
        return;
      }
    })
  }
}
