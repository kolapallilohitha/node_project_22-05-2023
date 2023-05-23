import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent} from 'src/app/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ChangeProfileModule } from 'src/app/change-profile/change-profile.module';
import { CommonModule } from '@angular/common';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {ChangeProfileComponent} from './change-profile/change-profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { LeaveComponent } from './leave/leave.component';
import { AttendenceModule} from './attendence/attendence.module';
import { LeaveModule} from './leave/leave.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    SignOutComponent,
    UserSigninComponent,
    ForgotPasswordComponent,
    ChangeProfileComponent,
    SideNavComponent,
    ChangePasswordComponent,
    AttendenceComponent,
    LeaveComponent,
    ResetPasswordComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ChangeProfileModule,
    AttendenceModule,
    LeaveModule,
    NgCircleProgressModule.forRoot({}),
    ChartsModule,
    ResetPasswordModule,
    MatDialogModule,
    MatTabsModule
  ],
  exports:[MatDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
