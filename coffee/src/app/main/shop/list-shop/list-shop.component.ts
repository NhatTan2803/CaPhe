import { Component, OnInit } from '@angular/core';
import { ListShopService } from './list-shop.service';
import { CONFIG } from '../../../core/app.config';
import { MainService } from '../../../main/main.service';
import { AddShopService } from '../add-shop/add-shop.service'
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-list-shop',
  templateUrl: './list-shop.component.html',
  styleUrls: ['./list-shop.component.css']
})
export class ListShopComponent implements OnInit {
  public shopProfile: Array<any> = []
  public idShop: number;
  public folder_avatar: string = CONFIG.BASE_API + '/uploads/imgShop/';
  public list_shop: Array<any> = []
  //public shop_avatar: string = '';
  // public shop_avatar: string = '';
  public shop_avatar: string = '';
  public shop_name: string = '';
  public shop_phone: string = '';
  public shop_email: string = '';
  public shop_dayFrom: string = ''; // cách đưa ngày tháng thành chuỗi
  public shop_address: string = '';
  public shop_system: number;//
  public shop_dayTo: string = ''
  public listSystem: Array<any> = []
  constructor(
    private _listshopService: ListShopService,
    private _mainService: MainService,
    private _addService: AddShopService
  ) { }

  ngOnInit() {
    this.getListShop();
  }
  uploadImg(e) {
    var formData = new FormData();
    formData.append('avatar', e.target.files["0"]);
    $.ajax({
      url: CONFIG.BASE_API + '/shop/upload-imgshop',
      type: 'POST',
      data: formData,
      processData: false,  // tell jQuery not to process the data
      contentType: false,  // tell jQuery not to set contentType
      success: (data) => {
        if (data.status == 'success') {
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
  getListShop() {
    this._listshopService.getListShop().subscribe(res => {
      if (res.status == 'error') {
        console.log('Lỗi không get được dữ liệu');
        return;
      }
      if (res.status == 'success') {

        this.list_shop = res.shops

        return;
      }
    })
  }
  selectShop(shop) {
    this.getListSystem();
    
    $('#shop-dayFrom').datetimepicker({
      format: 'DD/MM/YYYY',
    });
    $('#shop-dayTo').datetimepicker({
      format: 'DD/MM/YYYY',
    });
    //this.shopProfile = shop;
    console.log(shop);
    //this.shop_system = shop['system_name']
    this.idShop = shop['shop_id']
    this.shop_name = shop['shop_name']
    this.shop_email = shop['shop_email']
    this.shop_phone = shop['shop_phone']
    //this.shop_dayFrom = shop['shop_dayFrom']
    //this.shop_dayTo = shop['shop_dayTo']
    this.shop_address = shop['shop_address']
    this.shop_avatar = shop['shop_avatar']
  }
  getListSystem() {
    this._addService.getSystem().subscribe(res => {
      if (res.status == 'error') {
        console.log('error')
        return;
      }
      if (res.status == 'success') {
        this.listSystem = res.system;
        console.log(this.listSystem)
      }
    })
  }
  updateShop() {
    console.log('Ngay toi:')
    console.log($('#shop-dayFrom').val())
    let dataShop = JSON.stringify({
      shop_id: this.idShop,
      shop_system: this.shop_system,
      shop_name: this.shop_name,
      shop_email: this.shop_email,
      shop_phone: this.shop_phone,
      shop_dayFrom: $('#shop-dayFrom').val(),
      shop_dayTo: $('#shop-dayTo').val(),
      shop_address: this.shop_address,
      shop_avatar: this.shop_avatar,
    })
    console.log('chuoi data' + dataShop)
    

    this._listshopService.updateShop(dataShop).subscribe(res=>{
      if(res.status =='error')
      {
        console.log('error');
        return;
      }
      if(res.status =='success')
      {
        toastr.success('Cập nhật thành công');
        this.getListShop();
        $('#shop-dayFrom').val('');
        $('#shop-dayTo').val('');
        return;
      }
    })
  }
}
