import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  message: string = ``;
  displayMessage: boolean = false;
  clicks: Array<Date> = [];

  onClick() {
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
    if (this.displayMessage === false) {
      this.message = `Secret Password = tuna`;
      this.displayMessage = true;
    } else {
      this.message = ``;
      this.displayMessage = false;
    }
  }
}
