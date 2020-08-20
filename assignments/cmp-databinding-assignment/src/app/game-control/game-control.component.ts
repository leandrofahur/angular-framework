import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  index: number = 0;
  ref;

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.ref = setInterval(() => {
      this.index++;
      console.log(this.index);
    }, 1000);
  }

  onStop() {
    clearInterval(this.ref);
    this.index = 0;
  }
}
