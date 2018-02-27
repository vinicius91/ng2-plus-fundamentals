import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventsListComponent } from './events/events-list/events-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
