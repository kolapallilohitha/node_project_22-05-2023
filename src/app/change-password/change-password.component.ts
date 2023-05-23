import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  empId: string;
  id: any;
  userDetails: any;
  constructor(private fb: FormBuilder, private service: AppService, private toast: ToastrService, private router: Router) {
    this.changePasswordForm = this.fb.group({
      oldPassword: [''],
      newPassword: ['']
    })
  }


  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('user'))
    console.log(this.userDetails._id); 
    this.service.getPublisher().subscribe(
      (s:any) => {
        console.log("s", s);
        
      }
    )
  }

  changePassword() {
    const payload = {
      id: this.userDetails._id,
      newPassword: this.changePasswordForm.value.newPassword,
      oldPassword: this.changePasswordForm.value.oldPassword,
    }
    this.service.updatePassword(payload).subscribe(
      (success: any) => {
        this.toast.success("Password Updated Successfully", "Change Password");
        this.router.navigate(['/login'])
        console.log("updated", success)
      }
    )
  }

}
