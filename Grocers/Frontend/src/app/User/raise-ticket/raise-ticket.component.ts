import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  msg1?: string;
  msg2?: string;
  constructor(public ticketService: UsersService) { }

  ngOnInit(): void {
  }
  storeTicket(data: any): any {
    // console.log(data);
    if (data.username !== '' && data.reason !== '') {
      this.ticketService.storeTicketinfo(data);
    }
    if (data.username === '') {
      this.msg1 = 'Invalid input';
    }
    else {
      this.msg1 = '';
    }
    if (data.reason === '') {
      this.msg2 = 'Invalid input';
    }
    else
    {
      this.msg2 = '';
    }
  }
}
