import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgconfSearchModule} from 'ngconf-search';
import {NgconfTypeaheadModule} from 'ngconf-typeahead';

import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgconfSearchModule,
    NgconfTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
