import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService], //configure an Angular dependency injector with a provider of the service.
  bootstrap: [AppComponent]
})
export class AppModule { }
