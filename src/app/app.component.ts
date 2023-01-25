import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public now: Date = new Date();

  constructor() {

    //To get the current date
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }
}
