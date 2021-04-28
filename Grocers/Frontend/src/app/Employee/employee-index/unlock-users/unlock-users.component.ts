import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css'],
})
export class UnlockUsersComponent implements OnInit {
  constructor(public userServ: UsersService) {}
  msg?: string;

  ngOnInit(): void {}

  unlockUser(unlockRef: any): void {
    console.log('unlock called from component');
    this.userServ.unlockUser(unlockRef);
    this.msg = 'User Unlocked!';
  }
}
