import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShopComponent } from './add-shop.component';
import {Routes,RouterModule} from '@angular/router';
import {AddShopService} from './add-shop.service';
import {FormsModule} from '@angular/forms'
const routes: Routes =[
  {path:'', component : AddShopComponent}
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers:[AddShopService],
  declarations: [AddShopComponent]
})
export class AddShopModule { }
