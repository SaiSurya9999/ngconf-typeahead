import { NgModule } from '@angular/core';
import { NgconfTypeaheadComponent } from './ngconf-typeahead.component';
import { CommonModule } from '@angular/common';
import {NgconfSearchModule} from 'ngconf-search';

@NgModule({
  declarations: [NgconfTypeaheadComponent],
  imports: [
    CommonModule,
    NgconfSearchModule
  ],
  exports: [NgconfTypeaheadComponent,CommonModule]
})
export class NgconfTypeaheadModule { }
