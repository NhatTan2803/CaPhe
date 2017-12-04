import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../core/app.config';
import { PositionService } from './position.service';
import { MainService } from '../main.service'
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  public position_name: string = '';
  public list_position: Array<any> = [];
  public idShop: number;
  constructor(
    private _mainService: MainService,
    private _positionService: PositionService
  ) { }

  ngOnInit() {
    this.getIdShop();
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
        this.getPositions();
        return;
      }
    })
  }
  addPosition() {
    this.getIdShop();
    if (this.position_name === '') {
      toastr.warning('Bạn chưa nhập tên hệ thống');
      $('#position-name').focus();
      return;
    }

    let data = JSON.stringify({
      position_name: this.position_name,
      position_shop_id: this.idShop,
    });
    this._positionService.addPosition(data).subscribe(res => {
      if (res.status === 'erorr') {
        toastr.erorr(res.message);
        return;
      }
      if (res.status === 'success') {
          toastr.success(res.message),
          $('#position-name').val('');
          $('#position-name').focus();
        this.getPositions();
      }
    }, error => {
      console.log(error);
      return;
    })
  }
  getPositions() {
    let data = JSON.stringify({
      position_shop_id: this.idShop,
    });
    this._positionService.getPositions(data).subscribe(res => {
      if (res.status == 'error') {
        toastr.erorr(res.message);
        return;
      }
      if (res.status === 'success') {
        console.log(res)
        this.list_position = res.position;
      }
    }, error => {
      console.log(error);
      return;
    })
  }
  delposition(position_id) {
    console.log(position_id);
    this._positionService.delPosition(position_id).subscribe(res => {
      if (res.status == 'error') {
        toastr.error(res.message);
        return;
      }
      if (res.status == 'success') {
        toastr.success('Xóa thành công');
        this.getPositions();
      }
    }, error => {
      console.log(error);
      return;
    });
  }
}
