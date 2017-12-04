import { Component, OnInit } from '@angular/core';
import { AccountService } from "./account.service";
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 // public position_name: string = '';
  public list_account: Array<any> = [];
  constructor(
    private _accountService: AccountService
  ) { }

  ngOnInit() {
    this.getAccount();
  }
  getAccount() {
    
    this._accountService.getAccount().subscribe(res => {
      if (res.status === 'success') {
        console.log(res);
        this.list_account = res.account;
      }
      if (res.status === 'error') {
        toastr.error(res.message);
        return;
      }
    }, error => {
      toastr.warning('Không kết nối được tới Server'); 
      return;
    });
  }

}
