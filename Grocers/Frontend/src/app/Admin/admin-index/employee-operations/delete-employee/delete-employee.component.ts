import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  deleteMsg?: string;
  constructor(public emp: EmployeeService) { }

  ngOnInit(): void {
  }

  deleteEmp(empRef: any): void {
    console.log(empRef);
    this.emp.deleteEmpById(empRef.id).subscribe((result: string) => {
      this.deleteMsg = result;
    });
  }

}
