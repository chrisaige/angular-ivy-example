import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ToolbarModule} from '@porscheinformatik/material-addons';
import {AppComponent} from './app.component';
import '@angular/compiler';
import { TestComponent } from './test/test/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
