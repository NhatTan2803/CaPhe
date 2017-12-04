import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: SystemComponent
    , children: [
      { path: '', redirectTo: 'list-system', pathMatch: 'full' },
      { path: 'add-system', loadChildren: './add-system/add-system.module#AddSystemModule' },
      //{ path: 'list-system', loadChildren: './list-system/list-system.module#ListSystemModule' },
     ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [SystemComponent]
})
export class SystemModule { }
