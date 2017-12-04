import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../../core/app.config';
import { AddShopService } from './add-shop.service';
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
  public folder_avatar: string = CONFIG.BASE_API + '/uploads/imgShop/';
  public shop_avatar: string = '';
  public shop_name: string = '';
  public shop_phone: string = '';
  public shop_email: string = '';
  public shop_dayFrom: string = ''; // cách đưa ngày tháng thành chuỗi
  public shop_address: string = '';
  public shop_system: number;//
  public shop_dayTo: string = ''

  public list_system: Array<any> = []
  constructor(
    private _addShopService: AddShopService,
  ) { }

  ngOnInit() {
    this.getSystem();
    $('#shop-dayFrom').datetimepicker({
      format:'DD/MM/YYYY',
    });
    $('#shop-dayTo').datetimepicker({
      format:'DD/MM/YYYY',
    });
  }
  uploadImg(e) {
    var formData = new FormData();
    formData.append('avatar', e.target.files["0"]);
    $.ajax({
      url:CONFIG.BASE_API + '/shop/upload-imgshop',
      type:'POST',
      data: formData,
      processData: false,  // tell jQuery not to process the data
      contentType: false,  // tell jQuery not to set contentType
      success:(data)=>{
        if(data.status=='success')
        {
          toastr.success(data.message);
          this.shop_avatar = data.imgShop;
          return;
        }
        if (data.status === 'error') {
          console.log(data);
        }
      }
    })
  }
  addShop(){
    if (this.shop_name === '') {
      toastr.warning('Bạn chưa nhập tên cửa hàng');
      $('#shop-name').focus();
      return;
    }
    if (this.shop_phone === '') {
      toastr.warning('Bạn chưa nhập số điện thoại');
      $('#shop-phone').focus();
      return;
    }
    if (this.shop_email === '') {
      toastr.warning('Bạn chưa nhập email');
      $('#shop-email').focus();
      return;
    }
    var email = this.shop_email, atpos = email.indexOf("@"), dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      toastr.warning('Email không hợp lệ');
      $('#shop-email').focus();
      return;
    }
    if ($('#shop-dayFrom') === '') {
      toastr.warning('Bạn chưa nhập ngày ngày thuê');
      $('#shop-dayFrom').focus();
      return;
    }
    if ($('#shop-dayTo') === '') {
      toastr.warning('Bạn chưa nhập ngày hết hạn');
      $('#shop-dayTo').focus();
      return;
    }
    
    if (this.shop_address === '') {
      toastr.warning('Bạn chưa nhập địa chỉ');
      $('#shop-address').focus();
      return;
    }
    var data= JSON.stringify({
      shop_name: this.shop_name,
      shop_system_id: this.shop_system,
      shop_email: this.shop_email,
      shop_address: this.shop_address, 
      shop_phone: this.shop_phone,     
      shop_avatar: this.shop_avatar,
      shop_dayFrom: $('#shop-dayFrom').val(),
      shop_dayTo: $('#shop-dayTo').val(),
    });
    console.log(data);
    this._addShopService.addShop(data).subscribe(res=>{
      if(res.status ==='error'){
        toastr.error(res.message);
        return;
      }
      if(res.status ==='success')
      {
        toastr.success(res.message);
        $('#shop-name').val('');
        $('#shop-phone').val('');
        $('#shop-email').val('');
        $('#shop-dayFrom').val('');
        $('#shop-dayTo').val('');
        this.shop_avatar = '';
        $('#shop-avatar').val('');
        this.shop_system = undefined;
        $('#shop-address').val('');
        return;
      }
    },error=>{
      toastr.error('Không kết nối tới server');
      return;
    })
  }
  getSystem() {
    this._addShopService.getSystem().subscribe(res => {
      if (res.status == 'error') {
        console.log(res.message);
        return;
      }
      if (res.status == 'success') {
        this.list_system = res.system;
        console.log(res);
      }
    }, error => {
      console.log(error);
      return;
    });
  }
}
