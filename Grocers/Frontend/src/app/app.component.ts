import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grocers';
  isShown = true;

  // tslint:disable-next-line:typedef
  hide(){
    this.isShown = false;
  }
}
