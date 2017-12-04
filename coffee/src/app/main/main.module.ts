import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { MainService } from './main.service';
import { TokenService } from '../core/token.service'
const routes: Routes = [
  {
    path: '', component: MainComponent
    , children: [
      { path: 'account', loadChildren: './account/account.module#AccountModule' },
      { path: 'shop', loadChildren: './shop/shop.module#ShopModule' },
      { path: 'system', loadChildren: './system/system.module#SystemModule' },
      { path: 'buy', loadChildren: './buy/buy.module#BuyModule' },
      { path: 'drink', loadChildren: './drink/drink.module#DrinkModule' },
      { path: 'position', loadChildren: './position/position.module#PositionModule' },
      { path: 'staff', loadChildren: './staff/staff.module#StaffModule' },
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [MainService, TokenService],
  declarations: [MainComponent]
})
export class MainModule { }
