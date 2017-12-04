import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../../core/app.config';
import { AddBossService } from './add-boss.service';
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-add-boss',
  templateUrl: './add-boss.component.html',
  styleUrls: ['./add-boss.component.css']
})
export class AddBossComponent implements OnInit {
  public folder_avatar: string = CONFIG.BASE_API + '/uploads/imgBoss/';
  public boss_avatar: string = '';
  public boss_name: string = '';
  public boss_password: string = '';
  public boss_shop: number;
  public boss_email: string = '';
  public boss_birthday: string = ''; // cách đưa ngày tháng thành chuỗi
  public boss_sex: string;
  public boss_phone: string = '';
  public boss_address: string = '';
  public boss_permission: string = 'boss';
  public boss_active: string

  public list_shop: Array<any> = []
  constructor(
    private _addBossService: AddBossService,
  ) { }

  ngOnInit() {
    this.getShop();
    $('#boss-birthday').datetimepicker({
      format: 'DD/MM/YYYY',
    });
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
  addBoss() {
    if (this.boss_name === '') {
      toastr.warning('Bạn chưa nhập tên cửa hàng');
      $('#boss-name').focus();
      return;
    }
    if (this.boss_phone === '') {
      toastr.warning('Bạn chưa nhập số điện thoại');
      $('#boss-phone').focus();
      return;
    }
    // if (this.boss_email === '') {
    //   toastr.warning('Bạn chưa nhập email');
    //   $('#boss-email').focus();
    //   return;
    // }
    var email = this.boss_email, atpos = email.indexOf("@"), dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      toastr.warning('Email không hợp lệ');
      $('#boss-email').focus();
      return;
    }
    if ($('#boss-birthday') === '') {
      toastr.warning('Bạn chưa nhập ngày sinh');
      $('#boss-birthday').focus();
      return;
    }

    if (this.boss_address === '') {
      toastr.warning('Bạn chưa nhập địa chỉ');
      $('#boss-address').focus();
      return;
    }
    var data = JSON.stringify({
      boss_name: this.boss_name,
      boss_shop_id: this.boss_shop,
      boss_email: this.boss_email,
      boss_password: this.boss_password,
      boss_address: this.boss_address,
      boss_phone: this.boss_phone,
      boss_avatar: this.boss_avatar,
      boss_sex: this.boss_sex,
      boss_birthday: $('#boss-birthday').val(),
      boss_permission: this.boss_permission,
      boss_active: this.boss_active
    });
    console.log(data);
    this._addBossService.addShop(data).subscribe(res => {
      if (res.status === 'error') {
        toastr.error(res.message);
        return;
      }
      if (res.status === 'success') {
        toastr.success(res.message);
        $('#boss-name').val('');
        $('#boss-phone').val('');
        $('#boss-email').val('');
        $('#boss-birthday').val('');
        $('#boss-dayTo').val('');
        this.boss_avatar = '';
        $('#boss-avatar').val('');
        this.boss_shop = undefined;
        $('#boss-address').val('');
        return;
      }
    }, error => {
      toastr.error('Không kết nối tới server');
      return;
    })
  }
  getShop() {
    this._addBossService.getShop().subscribe(res => {
      if (res.status == 'error') {
        console.log(res.message);
        return;
      }
      if (res.status == 'success') {
        this.list_shop = res.shopname;
        console.log(res);
      }
    }, error => {
      console.log(error);
      return;
    });
  }
}
