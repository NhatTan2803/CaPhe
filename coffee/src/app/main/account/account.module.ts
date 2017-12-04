import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';
import {AccountService} from '../../main/account/account.service'
const routes: Routes =[
  {path:'',component: AccountComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[AccountService],
  declarations: [AccountComponent]
})
export class AccountModule { }
