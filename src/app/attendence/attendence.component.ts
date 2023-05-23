import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {
  today = new Date();

  thanksgiving = (() => {
      const tempDate = new Date(this.today.getFullYear(), 10, 1);

      //4th Thursday of November
      tempDate.setDate(tempDate.getDate() - tempDate.getDay() + 25);
      return tempDate;
  })();
  constructor() { }

  ngOnInit(): void {
  }

}
