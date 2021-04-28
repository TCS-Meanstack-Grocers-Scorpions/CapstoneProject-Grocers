import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(public emp: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmp(empRef: any): void {
    console.log(empRef);
    this.emp.storeEmpDetailsInfo(empRef);
    // ADD A RESULT MESSAGE SO THE USER KNOWS THE EMPLOYEE WAS SUCESSFULLY ADDED
  }

}
