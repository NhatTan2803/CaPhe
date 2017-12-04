import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: StaffComponent
    , children: [
      { path: '', redirectTo: 'list-staff', pathMatch: 'full' },
      { path: 'add-staff', loadChildren: './add-staff/add-staff.module#AddStaffModule' },
      { path: 'list-staff', loadChildren: './list-staff/list-staff.module#ListStaffModule' }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StaffComponent]
})
export class StaffModule { }
