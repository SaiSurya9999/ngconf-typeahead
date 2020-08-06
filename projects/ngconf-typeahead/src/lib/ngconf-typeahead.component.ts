import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngconf-typeahead',
  template: `
  <div class="typeahead" *ngIf="term !='' && flag && !forceStop">
  <ul class="typeaheadul">
      <li class="typeaheadli" (click)="onSelectItem(item)" *ngFor="let item of typeaheads | searchFilter: { term: term, prop: prop }">
          {{item}}
      </li>
  </ul>
  
</div>

  `,
  styles: [
    `.typeaheadul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  .typeaheadli{
     cursor: pointer;
  }
  `
  ]
})
export class NgconfTypeaheadComponent implements OnInit {
  //To filter the typeahead data with user input 
  @Input() term: String;

  //To set typeahead data to filter
  @Input() typeaheads: Array<any>;

  //To Force Stop Type Ahead
  @Input() stop:boolean;

  //To Emit when user Interact with the typeahead list
  @Output()
  onSelect = new EventEmitter<any>();

  prop:any = "";
  flag:boolean = true;
  forceStop:boolean = false;
  selectedItem:any = "";

  constructor() { }

  ngOnInit(): void {

  }

 onSelectItem(item){
     this.selectedItem = item;
     this.onSelect.emit(item);
     this.flag = false;
 }

 ngOnChanges(changes: SimpleChanges){
   if(changes.term){
    if(changes.term.currentValue != this.selectedItem){
       this.flag = true;
     }
   }
   
   if(changes.stop){
    this.forceStop = changes.stop.currentValue;
   }
  
 }

}
