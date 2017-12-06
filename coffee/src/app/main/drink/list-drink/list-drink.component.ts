import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../../core/app.config';
import { ListDrinkService } from './list-drink.service';
import { MainService } from '../../main.service'
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-list-drink',
  templateUrl: './list-drink.component.html',
  styleUrls: ['./list-drink.component.css']
})
export class ListDrinkComponent implements OnInit {
  public items: any
  public drink_avatar: string = ''
  public folder_avatar: string = CONFIG.BASE_API + '/uploads/imgDrink/';
  public list_drink: Array<any> = [];
  public idShop: number;
  constructor(
    private _mainService: MainService,
    private _listdrinkService: ListDrinkService
  ) { }

  ngOnInit() {
    this.getIdShop();
    console.log(this.getIdShop());
    this.getDrink();
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
        this.getDrink();
        return;
      }
    })
  }
  getDrink() {
    let data = JSON.stringify({
      drink_shop_id: this.idShop,
    })
    this._listdrinkService.getDrink(data).subscribe(res => {
      if (res.status == 'error') {
        console.log('error');
        return;
      }
      if (res.status == 'success') {
        this.list_drink = res.drinks;
        console.log(this.list_drink);
        return;
      }
    }, error => {
      console.log('error');
      return;
    })
  }
  checkImg(img): Boolean {
    if (img == null) {
      return false
    }
    if (img != null)
    {
      return true
    }
  }
  filterItemsOfType(type){
    return this.items.filter(x => x.drink_avatar == type);
  }
}
