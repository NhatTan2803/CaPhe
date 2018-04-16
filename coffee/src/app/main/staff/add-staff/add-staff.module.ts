import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStaffComponent } from './add-staff.component';
import { Routes, RouterModule } from '@angular/router';
import { AddStaffService } from './add-staff.service';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../main.service'
import { PositionService } from '../../position/position.service'

const routes: Routes = [
  { path: '', component: AddStaffComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [AddStaffService, MainService,PositionService],
  declarations: [AddStaffComponent]
})
export class AddStaffModule { }
