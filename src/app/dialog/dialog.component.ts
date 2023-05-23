import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  isShow: boolean;
  otpData: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
    private service: AuthenticationService, private toast: ToastrService, private route: Router) { }

  forgetDeteils: FormGroup

  ngOnInit(): void {

    this.forgetDeteils = this.fb.group({
      email: [''],
      otp: [''],
      newPassword: ['']
    })

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendOtp() {
    const payload = {
      email: this.forgetDeteils.value.email
    }
    if (this.forgetDeteils.value.email) {
      this.service.forget(payload).subscribe(
        (success) => {
          this.isShow = true;
          this.otpData = success
          this.toast.success(this.otpData.message)
          console.log(this.otpData)
        }
      )
    } else {
      this.isShow = false;
      this.toast.error("Please enter valied email")
    }


  }

  submit() {
    this.service.newPassword(this.forgetDeteils.value).subscribe(
      (success) => {
        this.isShow = false;
        this.route.navigate(['/login'])        
      }
    )
  }

}
