import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDrinkComponent } from './add-drink.component';
import { Routes, RouterModule } from '@angular/router';
import { AddDrinkService } from './add-drink.service';
import { FormsModule } from '@angular/forms'
const routes: Routes = [
  { path: '', component: AddDrinkComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[AddDrinkService],
  declarations: [AddDrinkComponent]
})
export class AddDrinkModule { }
