import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ToolbarModule} from '@porscheinformatik/material-addons';
import {AppComponent} from './app.component';
import '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
