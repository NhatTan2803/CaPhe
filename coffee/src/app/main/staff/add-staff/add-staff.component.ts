import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../../core/app.config';
import { AddStaffService } from './add-staff.service';
import { MainService } from '../../main.service';
import { PositionService } from '../../position/position.service'
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  public folder_avatar: string = CONFIG.BASE_API + '/uploads/imgStaff/';
  public staff_avatar: string = '';
  public staff_name: string = '';
  public staff_password: string = '';
  public staff_Idcard: string = '';
  public staff_shop_id: number;
  public staff_position: number;
  public staff_email: string = '';
  public staff_birthday: string = ''; // cách đưa ngày tháng thành chuỗi
  public staff_sex: string;
  public staff_phone: string = '';
  public staff_address: string = '';
  public staff_permission: string = 'staff';
  public staff_active: string;

  public list_position: Array<any> = []
  
  constructor(
    private _addStaffService: AddStaffService,
    private _mainService: MainService,
    private _positionService: PositionService
  ) { }

  ngOnInit() {
    this.getIdShop();
   
    $('#staff-birthday').datetimepicker({
      format: 'DD/MM/YYYY',
    });
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
        console.log(res.message)
      }
      if (res.status == 'success') {
        this.staff_shop_id = res.user['user_shop_id'];
        console.log('ma shop:' + this.staff_shop_id);
        this.getPosition();
      }
    })
  }
  getPosition(){
    let id = JSON.stringify({
      position_shop_id: this.staff_shop_id,
    })
    this._positionService.getPositions(id).subscribe(res=>{
      if(res.status=='error')
      {
        console.log('error');
        return;
      }
      if(res.status=='success')
      {
      console.log(res.position)
      this.list_position = res.position
      console.log(this.list_position)
      }
    })
  }
  addStaff() {
    if (this.staff_name === '') {
      toastr.warning('Bạn chưa nhập tên cửa hàng');
      $('#staff-name').focus();
      return;
    }
    
    if (this.staff_email === '') {
      toastr.warning('Bạn chưa nhập email');
      $('#staff-email').focus();
      return;
    }
    if (this.staff_Idcard === '') {
      toastr.warning('Bạn chưa nhập CMND');
      $('#staff-Idcard').focus();
      return;
    }
    
    var email = this.staff_email, atpos = email.indexOf("@"), dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      toastr.warning('Email không hợp lệ');
      $('#staff-email').focus();
      return;
    }
    if ($('#staff-birthday') === '') {
      toastr.warning('Bạn chưa nhập ngày sinh');
      $('#staff-birthday').focus();
      return;
    }
    if (this.staff_password === '') {
      toastr.warning('Bạn chưa nhập mật khẩu');
      $('#staff-password').focus();
      return;
    }
    
    var data = JSON.stringify({
      staff_name: this.staff_name,
      staff_shop_id: this.staff_shop_id,
      staff_email: this.staff_email,
      staff_password: this.staff_password,
      staff_Idcard: this.staff_Idcard,
      staff_address: this.staff_address,
      staff_phone: this.staff_phone,
      staff_avatar: this.staff_avatar,
      staff_sex: this.staff_sex,
      staff_position_id: this.staff_position,
      staff_birthday: $('#staff-birthday').val(),
      staff_permission: 'staff',
      staff_active: this.staff_active
    });
    console.log(data);
    this._addStaffService.addStaff(data).subscribe(res => {
      if (res.status === 'error') {
        toastr.error(res.message);
        return;
      }
      if (res.status === 'success') {

        toastr.success(res.message);
        $('#staff-name').val('');
        $('#staff-phone').val('');
        $('#staff-email').val('');
        $('#staff-birthday').val('');
        $('#staff-dayTo').val('');
        $('#staff-Idcard').val('');
        this.staff_avatar = '';
        $('#staff-avatar').val('');
        this.staff_position = undefined;
        this.staff_sex = undefined;
        this.staff_active= undefined;
        $('#staff-address').val('');
        $('#staff-password').val('');
        
        
        return;
      }
    }, error => {
      toastr.error('Không kết nối tới server');
      return;
    })
  }

}
