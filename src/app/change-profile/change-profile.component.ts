import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service'
@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.scss']
})
export class ChangeProfileComponent implements OnInit {
  profileInfo: any;
  tableInfo: any;
  information: any;
  addUsers: any;
  userDetailsForm: FormGroup;
  title: string;
  userId: any;
  userDetails: any;
  currentTab = 'tab1';
  infodata: any;
  constructor(private service: AppService, private toast: ToastrService, 
    private fb: FormBuilder, private router: ActivatedRoute) {
      this.userDetailsForm = this.fb.group({
        firstname: [''],
        lastname: [''],
        email: [''],
        empId: [''],
        gender: [''],
        dob: [''],
        designation: [''],
        phone: [''],
        city: [''],
        state: [''],
        zipcode: [''],
        education: [''],
        department: [''],
        team: [''], 
        role: [''] ,
        teams: [''],
        address1: [''],
        address2: ['']
      })
     }

  ngOnInit(): void {
    this.getTableData();
    this.userDetails = JSON.parse(localStorage.getItem('user'))
    console.log(this.userDetails.role);
  }


  openTab(tabName: string) {
    this.currentTab = tabName;
  }

  getTableData() {
    this.service.getprofile().subscribe(
      (success: any) => {
        this.tableInfo = success;
        console.log("this.tableInfo=====", this.tableInfo)
      }
    )
  }

  info(id: any, div: any) {
    console.log(id);
    this.service.getDetailsById(id).subscribe(
      (success: any) => {
        this.profileInfo = success;
        console.log("profileInfo", this.profileInfo);

        this.infodata = this.profileInfo.education;
        console.log('this.infodata', this.infodata)
      }
    )
    return this.information = div;
  }

  editUser(div: any, editForm: any) {
    this.title = "Update User";
    this.userId = editForm._id;
     this.userDetailsForm.patchValue({
      firstname: editForm.firstname,
      lastname: editForm.lastname,
      email: editForm.email,
      empId: editForm.empId,
      gender: editForm.gender,
      dob: editForm.dob,
      designation: editForm.designation,
      phone: editForm.phone,
      city: editForm.city,
      state: editForm.state,
      zipcode: editForm.zipcode,
      education: editForm.education,
      department: editForm.department,
      team: editForm.team,
      role: editForm.role,
      teams: editForm.teams,
      address1: editForm.address1,
      address2: editForm.address2   
     })
    return this.addUsers = div;
  }

  delete(id) {
    this.service.deleteProfile(id).subscribe(
      (success: any) => {
        this.toast.success("User Delated Successfully", "Profile")
        console.log('user deleted successfully', success);
        this.getTableData();
      }
    )
  }

  addUser(div: any) {
    console.log(div);
    this.title = "Add User";
    this.userDetailsForm
    return this.addUsers = div;
  }

  submit(formValue: any) {
    const reqbody = {
      firstname: this.userDetailsForm.value.firstname,
      lastname: this.userDetailsForm.value.lastname,
      email: this.userDetailsForm.value.email,
      empId: this.userDetailsForm.value.empId,
      gender: this.userDetailsForm.value.gender,
      dob: this.userDetailsForm.value.dob,
      designation: this.userDetailsForm.value.designation,
      phone: this.userDetailsForm.value.phone,
      city: this.userDetailsForm.value.city,
      state: this.userDetailsForm.value.state,
      zipcode: this.userDetailsForm.value.zipcode,
      education: this.userDetailsForm.value.education,
      department: this.userDetailsForm.value.department,
      team: this.userDetailsForm.value. team,
      role: this.userDetailsForm.value.role,
      teams: this.userDetailsForm.value.teams,
      address1: this.userDetailsForm.value.address1,
      address2: this.userDetailsForm.value.address2    
    }
    if (this.title === "Add User") {
     
      console.log(reqbody)
      this.service.createProfile(reqbody).subscribe(
        (success: any) => {
          this.toast.success("User Added Successfully", "User Profile");
          console.log(success)
        }
      )
    } else if (this.title === "Update User") {
      this.service.updateProfile(this.userId, reqbody).subscribe(
        (success: any) => {
          this.toast.success("User Updated Successfully", "User Profile")
          console.log(success)
        }
      )
    }
  }
}
