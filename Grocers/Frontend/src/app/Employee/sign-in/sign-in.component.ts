import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  msg?:string;
  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }
  employeeLogin(empRef:any){
    let id = empRef.empID;
    let pass = empRef.empPass;
    this.empSer.getEmployeeByID(id).subscribe(result=>{
      if(result?.length>0){
        if(result[0].pass == pass){
          //Navigate to employee index
          //Store current employee info in session storage
        }
        else{
          this.msg = "Employee Not Found"
        }
      }
    });
    
  }
}
