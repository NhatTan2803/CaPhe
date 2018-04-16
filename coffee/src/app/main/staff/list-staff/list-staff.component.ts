import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../../core/app.config';
import { ListStaffService } from './list-staff.service';
import { MainService } from '../../../main/main.service';
import { PositionService } from '../../position/position.service'
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {

  public position_name: string = '';
  public list_staff: Array<any> = [];
  public list_position: Array<any> = [];
  public idShop: number;
  public demoNgay: string;

  public folder_avatar: string = CONFIG.BASE_API + '/uploads/imgStaff/';
  public staff_avatar: string = '';
  public staff_id: number;
  public staff_name: string = '';
  public staff_password: string = '';
  public staff_Idcard: string = '';
  public staff_shop_id: number;
  public staff_position:string='';
  public staff_position_id: number;
  public staff_email: string = '';
  public staff_birthday: string = ''; // cách đưa ngày tháng thành chuỗi
  public staff_sex: string;
  public staff_phone: string = '';
  public staff_address: string = '';
  public staff_permission: string = 'staff';
  public staff_active: string;

  constructor(
    private _mainService: MainService,
    private _positionService: PositionService,
    private _listStaffService: ListStaffService
  ) { }

  ngOnInit() {
    this.getIdShop();

  }
  uploadImg(e) {
    var formData = new FormData();
    formData.append('avatar', e.target.files["0"]);
    $.ajax({
      url: CONFIG.BASE_API + '/boss/upload-imgStaff',
      type: 'POST',
      data: formData,
      processData: false,  // tell jQuery not to process the data
      contentType: false,  // tell jQuery not to set contentType
      success: (data) => {
        if (data.status == 'success') {
          toastr.success(data.message);
          this.staff_avatar = data.imgStaff;
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
  selectStaff(profile) {
    
      this.staff_id = profile['user_id'],
      this.staff_position = profile['user_position_id'],
      this.staff_name = profile['user_name'],
      this.staff_email = profile['user_email'],
      this.staff_Idcard = profile['user_Idcard'],
      this.staff_birthday = profile['user_birthday'],
      this.staff_sex = profile['user_sex'],
      this.staff_phone = profile['user_phone'],
      this.staff_address = profile['user_address'],
      this.staff_active = profile['user_active'],
      this.staff_avatar = profile['user_avatar'];
      console.log('vi tri cua nhan vien hien tai:'+ this.staff_position)
    let idShop = JSON.stringify({
      position_shop_id: this.idShop
    })
    console.log('id cua shop:'+idShop)
    this._positionService.getPositions(idShop).subscribe(res => {
      if (res.status == 'error') {
        console.log('error');
        return;
      }
      if (res.status == 'success') {
        this.list_position = res.position;
        
        console.log(this.list_position)
      }
    })
  }
  updateStaff() {
    let profileStaff = JSON.stringify({
      staff_id: this.staff_id,
      staff_name: this.staff_name,
      staff_email: this.staff_email,
      staff_Idcard: this.staff_Idcard,
      staff_sex: this.staff_sex,
      staff_position_id: this.staff_position,
      staff_phone: this.staff_phone,
      staff_avatar:this.staff_avatar,
      staff_address: this.staff_address,
      staff_active: this.staff_active,
    })
    console.log('vi tri sau khi thay doi:'+ this.staff_position)
    console.log('sau khi nen file json:')
    console.log(profileStaff);
    
    this._listStaffService.updateStaff(profileStaff).subscribe(res => {
      if (res.status == 'error') {
        console.log('error');
        return;
      }
      if (res.status == 'success') {
        toastr.success(res.message);
        this.getStaff();
        return;
      }
    })
   }
}
