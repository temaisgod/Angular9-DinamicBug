import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  animations: [
    trigger('openAnimation', [
      state('show', style({ height: '*' })),
      state('hidden', style({ height: '0px' })),
      transition('show <=> hidden', animate(500))
    ])
  ],
})
export class ClientComponent implements OnInit {
  
@ViewChild('drawer', { static: true }) drawer: MatDrawer;

showText: boolean = false;

clientName: string = '';

  constructor() { }

  ngOnInit() {

  }

  openSidenav(){
    this.drawer.toggle();
  }

  animate(){
    this.showText = !this.showText;
  }

}