import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSystemComponent } from './add-system.component';
import { Routes, RouterModule } from '@angular/router';
import { AddSystemService } from './add-system.service';
import { FormsModule } from '@angular/forms'
const routes: Routes = [
  { path: '', component: AddSystemComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [AddSystemService],
  declarations: [AddSystemComponent]
})
export class AddSystemModule { }
