import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStaffComponent } from './list-staff.component';
import { Routes, RouterModule } from '@angular/router';
import { ListStaffService } from './list-staff.service';
import { FormsModule } from '@angular/forms';
import { PositionService } from '../../position/position.service'

const routes: Routes = [
  { path: '', component: ListStaffComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [ListStaffService, PositionService],
  declarations: [ListStaffComponent]
})
export class ListStaffModule { }
