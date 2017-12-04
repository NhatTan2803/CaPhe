import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBossComponent } from './add-boss.component';
import {Routes,RouterModule} from '@angular/router';
import {AddBossService} from  './add-boss.service'
import {FormsModule} from '@angular/forms'
const routes: Routes =[
  {path:'', component: AddBossComponent}
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[AddBossService],
  declarations: [AddBossComponent]
})
export class AddBossModule { }
