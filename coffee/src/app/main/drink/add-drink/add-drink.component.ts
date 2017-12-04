import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../../core/app.config';
import { AddDrinkService } from './add-drink.service';
import { MainService } from '../../main.service'
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.css']
})
export class AddDrinkComponent implements OnInit {
  public drink_avatar: string=''
  public drink_name: string = ''
  public folder_avatar: string = CONFIG.BASE_API + '/uploads/imgDrink/'
  public drink_price: number
  public idShop: number;
  constructor(
    private _mainService: MainService,
    private _adddrinkService: AddDrinkService
  ) { }

  ngOnInit() {
    this.getIdShop();
  }
  uploadImg(e) {
    var formData = new FormData();
    formData.append('avatar', e.target.files["0"]);
    $.ajax({
      url: CONFIG.BASE_API + '/boss/upload-imgDrink',
      type: 'POST',
      data: formData,
      processData: false,  // tell jQuery not to process the data
      contentType: false,  // tell jQuery not to set contentType
      success: (data) => {
        if (data.status == 'success') {
          toastr.success(data.message);
          this.drink_avatar = data.imgDrink;
          return;
        }
        if (data.status === 'error') {
          console.log(data);
        }
      }
    })
  }
  getIdShop() {
    this._mainService.getProfile().subscribe(res => {
      if (res.status == 'error') {
        console.log('error');
        return;
      }
      if (res.status == 'success') {
        this.idShop = res.user['user_shop_id'];
        console.log('id cua shop:' + this.idShop);
        return;
      }
    })
  }
  addDrink() {
    this.getIdShop();
    if (this.drink_name === '') {
      toastr.warning('Bạn chưa nhập tên hệ thống');
      $('#drink-name').focus();
      return;
    }
    if (!this.drink_price) {
      toastr.warning('Bạn chưa giá đồ uống');
      $('#drink-price').focus();
      return;
    }
    let data = JSON.stringify({
      drink_name: this.drink_name,
      drink_avatar: this.drink_avatar,
      drink_shop_id: this.idShop,
      drink_price: this.drink_price
    });
    this._adddrinkService.addDrink(data).subscribe(res => {
      if (res.status === 'erorr') {
        toastr.erorr(res.message);
        return;
      }
      if (res.status === 'success') {
        toastr.success(res.message),
          $('#drink-name').val('');
        $('#drink-name').focus();
        $('#drink-price').val('');
      }
    }, error => {
      console.log(error);
      return;
    })
  }

}
