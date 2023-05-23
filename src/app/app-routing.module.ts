import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangeProfileComponent } from './change-profile/change-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { LeaveComponent } from './leave/leave.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
  {
    path: "",
    component: UserComponent
  },
  {
    path: "signup",
    component: UserSigninComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
  },
  
  // {
  //   path: "change-profile",
  //   component: ChangeProfileComponent,
  // },
  // {
  //   path: "change-profile", 
  //   loadChildren: () => import('./change-profile/change-profile.module').then(mod => mod.ChangeProfileModule),
  // },
  {
    path:"change-password",
    component: ChangePasswordComponent,
    loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule),
  },

  {
    path:"user-profile",
    component: ChangeProfileComponent,
    loadChildren: () => import('./change-profile/change-profile.module').then(m => m.ChangeProfileModule),
  },

  {
   path:"Attendence",
   component: AttendenceComponent,
   loadChildren: () => import('./attendence/attendence.module').then(m => m.AttendenceModule),
  },

  {
   path:"Leave",
   component: LeaveComponent,
   loadChildren: () => import('./leave/leave.module').then(m => m.LeaveModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
