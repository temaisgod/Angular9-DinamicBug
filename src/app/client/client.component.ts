import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
@ViewChild('drawer', { static: true }) drawer: MatDrawer;

clientName: string = '';

  constructor() { }

  ngOnInit() {

  }

  openSidenav(){
    this.drawer.toggle();
  }

}