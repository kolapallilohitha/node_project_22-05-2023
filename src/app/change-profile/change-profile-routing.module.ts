import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeProfileComponent } from './change-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeProfileRoutingModule { }
