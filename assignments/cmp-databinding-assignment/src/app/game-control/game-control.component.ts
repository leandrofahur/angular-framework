import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() timeInterval = new EventEmitter<number>();
  timer: number = 0;
  ref;

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.ref = setInterval(() => {
      this.timeInterval.emit(this.timer++);
      // console.log(this.timer);
    }, 1000);
  }

  onStop() {
    clearInterval(this.ref);
    this.timer = 0;
  }
}
