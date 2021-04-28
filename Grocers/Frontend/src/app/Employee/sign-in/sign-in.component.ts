import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class EmployeeSignInComponent implements OnInit {
  msg?:string;
  constructor(public empSer:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }
  employeeLogin(empRef:any){
    let id = empRef.empID;
    let pass = empRef.empPass;
    this.empSer.getEmployeeByID(id).subscribe(result=>{
      if(result?.length>0){
        if(result[0].pass == pass){
          sessionStorage.setItem("curEmployeeID",id);
          this.router.navigate(["employee-index"]);
        }
        else{
          this.msg = "Employee Not Found, try again"
        }
      }
    });
    
  }
}
