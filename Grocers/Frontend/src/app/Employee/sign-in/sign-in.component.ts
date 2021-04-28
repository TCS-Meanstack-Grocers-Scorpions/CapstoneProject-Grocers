import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class EmployeeSignInComponent implements OnInit {
  msg?: string;
  constructor(public empSer: EmployeeService, public router: Router) { }

  ngOnInit(): void {
  }
  employeeLogin(empRef: any): void{
    const id = empRef.empID;
    const pass = empRef.empPass;
    this.empSer.getEmployeeByID(id).subscribe(result => {
      if (result?.length > 0){
        if (result[0].pass === pass){
          sessionStorage.setItem('curEmployeeID', id);
          this.router.navigate(['employeeDashboard']);
        }
        else{
          this.msg = 'Employee Not Found, try again';
        }
      }
    });

  }
}
