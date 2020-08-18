import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = `No server was created!!!`;
  serverName: string = ``;
  serverCreated: boolean = false;
  servers: Array<string> = ['id: 0x0011', 'id:0x0101'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    // console.log(event.target.value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {}
}
