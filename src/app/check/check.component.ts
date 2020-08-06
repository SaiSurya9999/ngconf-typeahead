import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit,OnChanges {

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
