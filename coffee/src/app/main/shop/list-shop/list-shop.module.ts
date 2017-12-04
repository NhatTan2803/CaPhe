import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShopComponent } from './list-shop.component';
import {Routes,RouterModule} from '@angular/router';
import {ListShopService} from './list-shop.service';
import {FormsModule} from '@angular/forms'
const routes: Routes =[
  {path:'',component:ListShopComponent}
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers:[ListShopService],
  declarations: [ListShopComponent]
})
export class ListShopModule { }
