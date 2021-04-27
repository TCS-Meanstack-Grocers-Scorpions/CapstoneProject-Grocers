import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  currentFunds? = 0;
  id = sessionStorage.getItem("curUserId");
  constructor(public userSer:UsersService) { }

  ngOnInit(): void {
    this.userSer.retrieveUserById(this.id).subscribe(result=>{
      this.currentFunds = result[0].funds;
    }
      )
  }
  addFunds(userRef:any){
    this.userSer.updateFunds(userRef,this.id);
    this.userSer.retrieveUserById(this.id).subscribe(result=>{
      this.currentFunds = result[0].funds;
    }
      )
  }

}
