import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit-prodile',
  templateUrl: './edit-prodile.component.html',
  styleUrls: ['./edit-prodile.component.css']
})
export class EditProdileComponent implements OnInit {
  id = sessionStorage.getItem("curUserId");
  constructor(public userSer:UsersService) { }

  ngOnInit(): void {
  }
  updateUserInfo(userRef:any){
    this.userSer.updateUserById(userRef);
  }
  displayID(){

  }

}
