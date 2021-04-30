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
  showChangePass:boolean = false;
  constructor(public empSer: EmployeeService, public router: Router) { }

  ngOnInit(): void {
  }

  employeeLogin(empRef: any): void {
    const id = empRef.empID;
    const pass = empRef.empPass;
    // if (pass == "Welcome123"){
    //   alert("Change Password From Default");
    //   this.displayChangePass();
    // }
    
    this.empSer.getEmployeeByID(id).subscribe(result => {
      if (result[0]._id === id && result[0].pass === "Welcome123") {
        alert("Change Password From Default");
        this.displayChangePass();
      } 
      else if (result[0]._id === id && result[0].pass === pass) {
        sessionStorage.setItem('curEmployeeID', id);
        this.router.navigate(['employee-index']);
        this.msg = 'Successful';
      } 
      else {
        this.msg = 'Employee Not Found, try again';
      }
    });
    
  }
  displayChangePass(){
    this.showChangePass = !this.showChangePass;
  }

  changeEmployeePassword(empRef : any){
    let id = empRef.id;
    this.empSer.changeEmployeePassword(empRef,id);
    alert("Log In With New Password");
    this.displayChangePass()
  }
}
