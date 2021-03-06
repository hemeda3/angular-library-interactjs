/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { InteractJSModule }  from 'angular-library-interactjs';

@Component({
  selector: 'app',
  template: `<sample-component></sample-component>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, InteractJSModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
