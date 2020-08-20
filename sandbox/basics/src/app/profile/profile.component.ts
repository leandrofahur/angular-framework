import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  nameInput: string = '';
  emailInput: string = '';
  isDisabled: boolean = false;

  @Output() profile = new EventEmitter<{ name: string; email: string }>();

  constructor() {}

  ngOnInit(): void {}

  onCheckbox() {
    this.isDisabled = !this.isDisabled;
  }

  onAddPerson() {
    this.profile.emit({
      name: this.nameInput,
      email: this.emailInput,
    });
  }

  onDeletePerson() {
    console.log('Deleted...');
  }
}
