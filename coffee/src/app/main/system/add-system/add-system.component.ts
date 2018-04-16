import { Component, OnInit } from '@angular/core';
import { AddSystemService } from './add-system.service'
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-add-system',
  templateUrl: './add-system.component.html',
  styleUrls: ['./add-system.component.css']
})
export class AddSystemComponent implements OnInit {
  public system_name: string = '';
  public system_address: string = '';
  public list_system: Array<any> = [];
  public select_system: Object={}
  constructor(
    private _addsystemService: AddSystemService,
  ) { }

  ngOnInit() {
    this.getSystems();
  }
  // them he thong
  addSystem() {
    if (this.system_name === '') {
      toastr.warning('Bạn chưa nhập tên hệ thống');
      $('#system_name').focus();
      return;
    }
    if (this.system_address === '') {
      toastr.warning('Bạn chưa nhập tên hệ thống');
      $('#system_name').focus();
      return;
    }
    let data = JSON.stringify({
      system_name: this.system_name,
      system_address: this.system_address
    });
    this._addsystemService.addSystem(data).subscribe(res => {
      if (res.status === 'erorr') {
        toastr.erorr(res.message);
        return;
      }
      if (res.status === 'success') {
        toastr.success(res.message),
        $('#system_name').val('');
        $('#system_address').val('');
        $('#system_name').focus();
        this.getSystems();
      }
    }, error => {
      console.log(error);
      return;
    })
  }
  getSystems() {
    this._addsystemService.getSystems().subscribe(res => {
      if (res.status == 'error') {
        toastr.erorr(res.message);
        return;
      }
      if (res.status === 'success') {
        console.log(res)
        this.list_system = res.system;
      }
    }, error => {
      console.log(error);
      return;
    })
  }
  delSystem(system_id){
    console.log(system_id);
    this._addsystemService.delSystem(system_id).subscribe(res=>{
      if(res.status =='error')
      {
        toastr.error(res.message);
        return;
      }
      if(res.status == 'success')
      {
        toastr.success('Xóa thành công');
        this.getSystems();
      }
    },error=>{
      console.log(error);
      return;
    });
  }
  infoSystem(system_id){
    //console.log(system_id);
  }
  selectSystem(system)
  {
    this.select_system = system;
    console.log(system)
  }
}
