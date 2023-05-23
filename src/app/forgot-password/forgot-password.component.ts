import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  message: string;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }
  onSubmit(): void {
    this.http.post('/api/forgot', { email: this.email }).subscribe(
      () => {
        this.message = 'An email has been sent to your email address with instructions for resetting your password.';
      },
      error => {
        console.error(error);
        this.message = 'An error occurred while processing your request.';
      }
    );
  }

}
