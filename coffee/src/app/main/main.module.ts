import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { MainService } from './main.service';
import { TokenService } from '../core/token.service';
import { Auth } from '../core/app.auth'
const routes: Routes = [
  {
    path: '', component: MainComponent
    , children: [
      { path: 'account', loadChildren: './account/account.module#AccountModule',canActivate:[Auth] },
      { path: 'shop', loadChildren: './shop/shop.module#ShopModule',canActivate:[Auth] },
      { path: 'system', loadChildren: './system/system.module#SystemModule',canActivate:[Auth] },
      { path: 'buy', loadChildren: './buy/buy.module#BuyModule',canActivate:[Auth] },
      { path: 'drink', loadChildren: './drink/drink.module#DrinkModule',canActivate:[Auth] },
      { path: 'position', loadChildren: './position/position.module#PositionModule',canActivate:[Auth] },
      { path: 'staff', loadChildren: './staff/staff.module#StaffModule',canActivate:[Auth] },
      { path: 'statistic', loadChildren: './statistic/statistic.module#StatisticModule',canActivate:[Auth] },
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [MainService, TokenService, Auth],
  declarations: [MainComponent]
})
export class MainModule { }
