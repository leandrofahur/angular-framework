import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onTimeInterval(time: number) {
    if (time % 2 === 0) {
      this.evenNumbers.push(time);
    } else {
      this.oddNumbers.push(time);
    }
  }
}
