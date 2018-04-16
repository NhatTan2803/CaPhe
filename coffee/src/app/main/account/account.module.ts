import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../main/account/account.service';
import { ListShopService } from '../shop/list-shop/list-shop.service'

const routes: Routes = [
  { path: '', component: AccountComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [AccountService, ListShopService],
  declarations: [AccountComponent]
})
export class AccountModule { }
