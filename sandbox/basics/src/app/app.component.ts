import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profiles: { name: string; email: string }[] = [];

  onProfileAdded(data: { name: string; email: string }) {
    this.profiles.push(data);
    // console.log(data);
  }
}
