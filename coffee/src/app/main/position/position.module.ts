import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionComponent } from './position.component';
import { PositionService } from './position.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';;
import { MainService } from '../../main/main.service'
const routes: Routes = [
  { path: '', component: PositionComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [PositionService, MainService],
  declarations: [PositionComponent]
})
export class PositionModule { }
