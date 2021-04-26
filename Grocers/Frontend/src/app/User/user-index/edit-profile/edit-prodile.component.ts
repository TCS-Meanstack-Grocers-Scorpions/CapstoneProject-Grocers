import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit-prodile',
  templateUrl: './edit-prodile.component.html',
  styleUrls: ['./edit-prodile.component.css']
})
export class EditProdileComponent implements OnInit {
  id = "";
  constructor(public userSer:UserService) { }

  ngOnInit(): void {
  }
  updateUserInfo(userRef:any){
    this.userSer.updateUserInfo(userRef);
  }

}
