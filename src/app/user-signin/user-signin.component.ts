import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {
  signupForm: FormGroup;
  inputType:string='password'
  constructor(private fb: FormBuilder, private service: AuthenticationService, private toast: ToastrService, private router: Router) { 
    this.signupForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      phone: [''],
      email: [''],
      password: [''],
      avatar: ['']
    });
  }

  ngOnInit(): void {
  }

  
  submit() {
    this.service.register(this.signupForm.value).subscribe(
      (success: any) => {
        this.toast.success('User Registration Successfully', 'User Signup');
        this.router.navigate(['/'])
      },
      (error: any) => {
        this.toast.error('User Registration Failed')
      }
    )

    console.log(this.signupForm.value)
  }

}
