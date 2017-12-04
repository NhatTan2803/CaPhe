import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../../core/app.config';
import { ListStaffService } from './list-staff.service';
import { MainService } from '../../../main/main.service'
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {
  //public staff_avatar: string = ''
  public folder_avatar: string = CONFIG.BASE_API + '/uploads/imgStaff/'
  public position_name: string = '';
  public list_staff: Array<any> = [];
  public idShop: number;
  public demoNgay: string;
  constructor(
    private _mainService: MainService,
    private _listStaffService: ListStaffService
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
        this.getStaff();
        return;
      }
    })
  }
  getStaff() {
    let idShop = JSON.stringify({
      idShop: this.idShop,
    })
    this._listStaffService.getStaff(idShop).subscribe(res => {
      if (res.status == 'error') {
        console.log('error');
      }
      if (res.status == 'success') {
        this.list_staff = res.staffs;
        console.log('Chuoi danh sach res.staffs:')
        console.log(res.staffs)
        console.log(this.list_staff[1].user_name)
        console.log('Chuoi danh sach this.list_staff:')
        console.log(this.list_staff)
        //var date = this.list_staff['user_name']
        // this.demoNgay = this.list_staff[1].createdAt
        // console.log('vo ham')
        // var demo = this.demoNgay.toString();
        // if(typeof demo)
        // {
        //   console.log('la chuoi')
        // }

        // var ngay = demo.split(' ')
        // //console.log(res.staffs)
        // console.log(ngay)
        return;
      }
    }, error => {
      console.log('Không kết nối tới server');
      return;
    })
    // this._listStaffService.getStaff(idShop).subscribe(res=>{
    //   if(res.status ==='error')
    //   {
    //     console.log('error')
    //     return;
    //   }
    //   if(res.status ==='success')
    //   {
    //     this.list_staff = res.staffs
    //     return;
    //   }
    // })
  }
}
