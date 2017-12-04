import { Component, OnInit } from '@angular/core';
import { ListShopService } from './list-shop.service';
import { CONFIG } from '../../../core/app.config'
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-list-shop',
  templateUrl: './list-shop.component.html',
  styleUrls: ['./list-shop.component.css']
})
export class ListShopComponent implements OnInit {
  public folder_avatar: string = CONFIG.BASE_API + '/uploads/imgShop/';
  public list_shop: Array<any> = []
  //public shop_avatar: string = '';
  // public shop_avatar: string = '';
  constructor(
    private _listshopService: ListShopService
  ) { }

  ngOnInit() {
    this.getListShop();
  }
  // loadImg() {
  //   $.ajax({
  //     url: CONFIG.BASE_API + '/shops/get-list',
  //     type: 'GET',
  //     data: String,
  //     processData: false,  // tell jQuery not to process the data
  //     contentType: false,  // tell jQuery not to set contentType
  //     success: (data) => {
  //       if (data.status == 'success') {
  //         toastr.success(data.message);
  //         this.shop_avatar = data.imgShop;
  //         console.log(this.shop_avatar)
  //         return;
  //       }
  //       if (data.status === 'error') {
  //         console.log(data);
  //       }
  //     }
  //   })
  // }
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
}
