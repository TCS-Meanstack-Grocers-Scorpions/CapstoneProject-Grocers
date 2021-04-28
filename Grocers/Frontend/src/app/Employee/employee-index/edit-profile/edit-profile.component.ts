import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../employee.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  constructor(public empServ: EmployeeService) {}
  msg?: String;

  ngOnInit(): void {}

  updateEmpProfile(editRef: any): void {
    this.empServ.updateEmployeeProfile(editRef);
    this.msg = 'Your profile is updated!';
  }
}
