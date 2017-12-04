import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import { BuyService } from './buy.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../main/main.service'
const routes: Routes = [
  { path: '', component: BuyComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [BuyService, MainService],
  declarations: [BuyComponent]
})
export class BuyModule { }
