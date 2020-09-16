import { Component, ViewChild } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { AdDirective } from './ad.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  client1;
  client2;

  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;

  loadClient(id: number){

  }
}
