import { Component, OnInit } from '@angular/core';
import { Profile } from '../shared/profile.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = [
    new Profile(
      'Jacob',
      'male',
      'New Zeland',
      'https://randomuser.me/api/portraits/men/36.jpg'
    ),
    // new Profile(
    //   'Byron',
    //   'male',
    //   'Australia',
    //   'https://randomuser.me/api/portraits/men/85.jpg'
    // ),
    // new Profile(
    //   'Isla',
    //   'female',
    //   'Australia',
    //   'https://randomuser.me/api/portraits/women/38.jpg'
    // ),
  ];

  constructor() {}

  onNext() {
    console.log('next...');
  }

  onPrevious() {
    console.log('previous...');
  }

  ngOnInit(): void {}
}
