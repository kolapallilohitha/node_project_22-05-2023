import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  leaveDetails: FormGroup;
  leave: any
  constructor(private fb: FormBuilder, private app: AppService) { }

  ngOnInit(): void {
    this.leaveDetails = this.fb.group({
      employeename: [''],
      leavetype: [''],
      fromdate: [''],
      todata: [''],
      leavestatus: [''],
      reason: ['']
    });
    this.getTableData();
  }


  submit() {
    console.log(this.leaveDetails.value);
    this.app.leaveDetail(this.leaveDetails.value).subscribe((success) => {
      console.log('success', success);
      this.getTableData();
      this.leaveDetails.reset();
    }, (error) => {
      console.log('error', error)
    });
  }

  getTableData() {
    this.app.getLeave().subscribe(
      (success: any) => {
        console.log(success);
        this.leave = success;
    
      }
    )
  }
}
