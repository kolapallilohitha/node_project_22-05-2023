import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from "../authentication.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  component = 'User Login'
  signupForm: FormGroup;
  loginForm: FormGroup;
  divChange: any;
  changeTab: String;
  show: any;
  userLogin: any;
  userId: void;
  @Input() isLoggedIn: boolean;
  constructor( private fb: FormBuilder, private service: AuthenticationService,
     private toast: ToastrService, private router: Router,private dialog: MatDialog) { }

  inputType:string='password'

  showPassword(event:any){
    event.target.checked?this.inputType='text':this.inputType='password';

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }


  login() {
    console.log(this.loginForm.controls)
    this.service.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (success:any) => {
        const userList = success.userLogin;
        localStorage.setItem("user", JSON.stringify(userList));
        this.toast.success('User Authenticated Successfully', this.component);
        this.router.navigate(['/Dashboard'])
      },
      (error: any) => {
        this.toast.error('User Login Failed')
      }
    )
  }

  changeDiv() {
    this.show = !this.show;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { name: 'Angular' }
    });
  
    dialogRef.afterClosed().subscribe(success => {
      console.log(success);
    });
  }


}
