import { Component, ViewChild, ComponentFactoryResolver, ViewRef } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { AdDirective } from './ad.directive';
import { ClientComponent } from './client/client.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  client1: ViewRef;
  client2: ViewRef;
  loadComponent: number = 0;
  _currentComponent: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ){

  }

  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;

  loadClient(id: number){

    // If container has load a instance save it
    if (this.loadComponent){

      this.loadComponent === 1 ? this.client1 = this._currentComponent : this.client2 = this._currentComponent;
      // extract the component from view and save in the global variable
      let viewRef = this.adHost.viewContainerRef.detach(0);
    }

    let componentLoad = id === 1 ? this.client1 : this.client2;

    if (componentLoad){
      // if the component has been loaded.
      this.adHost.viewContainerRef.insert(componentLoad, 0);
      this._currentComponent = componentLoad;
    }else{
      // if the component not has load. Instance it.
       let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ClientComponent);
       this._currentComponent = this.adHost.viewContainerRef.createComponent(componentFactory, 0);
    }
    this._currentComponent.instance.clientName = `Cliente  ${id}`;
    this.loadComponent = id;
  }
}
