import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  resultMsg?:string;
  constructor(public emp: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmp(empRef: any): void {
    console.log(empRef);
    this.emp.storeEmpDetailsInfo(empRef);
    this.resultMsg = "Product Added"
    //displays the result message for 10 seconds and then 'removes' it
    setTimeout(()=> this.resultMsg = '',10000);
  }

}
