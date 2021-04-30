import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model.tickets';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css'],
})
export class UnlockUsersComponent implements OnInit {
  constructor(public userServ: UsersService) {}
  tickets?: Array<Ticket>;
  msg?: string;

  ngOnInit(): void {
    this.userServ.getTickets().subscribe((result) => {
      this.tickets = result;
    });
  }

  unlockUser(unlockRef: any): void {
    console.log('unlock called from component');
    this.userServ.unlockUser(unlockRef);
    this.msg = 'User Unlocked!';
  }

  resolvedTicket(ticketId: any): any {
    console.log('Resolved Ticket Fired for: ' + ticketId);
    this.userServ.resolveTicket(ticketId).subscribe((result: string) => {
      console.log(result);
    });
    this.tickets = [];
    this.userServ.getTickets().subscribe((result) => {
      this.tickets = result;
    });
  }
}
