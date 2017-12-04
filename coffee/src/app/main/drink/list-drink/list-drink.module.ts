import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDrinkComponent } from './list-drink.component';
import { Routes, RouterModule } from '@angular/router';
import { ListDrinkService } from './list-drink.service';
import { FormsModule } from '@angular/forms'
const routes: Routes = [
  { path: '', component: ListDrinkComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[ListDrinkService],
  declarations: [ListDrinkComponent]
})
export class ListDrinkModule { }
