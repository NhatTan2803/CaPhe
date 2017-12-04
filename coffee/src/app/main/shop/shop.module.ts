import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: ShopComponent
    , children: [
      { path: '', redirectTo: 'list-shop', pathMatch: 'full' },
      { path: 'add-boss', loadChildren: './add-boss/add-boss.module#AddBossModule' },
      { path: 'list-shop', loadChildren: './list-shop/list-shop.module#ListShopModule' },
      { path: 'add-shop', loadChildren: './add-shop/add-shop.module#AddShopModule' }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopComponent]
})
export class ShopModule { }
