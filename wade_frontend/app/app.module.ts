import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import {ExplorerModule} from "./explorer/explorer.module";


@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      ExplorerModule,
      RouterModule.forRoot([
          { path: 'welcome', component: WelcomeComponent },
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
          { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      ])
  ],
    //  Components, Directives, Pipes !
  declarations: [
      AppComponent,
      WelcomeComponent
  ],
    //  Just root!
  bootstrap: [ AppComponent ]
})
export class AppModule { }
