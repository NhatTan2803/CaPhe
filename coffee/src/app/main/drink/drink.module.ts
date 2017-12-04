import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkComponent } from './drink.component';
import { DrinkService } from './drink.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '', component: DrinkComponent,
    children: [
      { path: '', redirectTo: 'list-drink', pathMatch: 'full' },
      { path: 'list-drink', loadChildren: './list-drink/list-drink.module#ListDrinkModule' },
      { path: 'add-drink', loadChildren: './add-drink/add-drink.module#AddDrinkModule' }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [DrinkService],
  declarations: [DrinkComponent]
})
export class DrinkModule { }
