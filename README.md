# Ngconf-Typeahead Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

> ![ngconf-typeahead](https://img.icons8.com/cute-clipart/48/000000/hint.png "Typeahead Feature") Typeahead Feature for Angular.  


### Demo Link   
[Stackblitz Demo](https://stackblitz.com/edit/ngconf-typeahead "ngconf-typeahead Demo") 

## Step - 1

> npm i ngconf-search --save  
[NPM Package Link](https://www.npmjs.com/package/ngconf-typeahead "ngconf-typeahead")  

import NgconfTypeaheadModule in **app.module.ts** file.  
**app.module.ts**
```javascript
import {NgconfTypeaheadModule} from 'ngconf-typeahead';
 imports: [
    NgconfTypeaheadModule
  ]
  ```

## Step - 2
This step is to quick start the usage of package later with the understanding of workflow you can  
modify the code.  
**app.component.ts**
 ```javascript
  term:any = "";
  stop:boolean = false;
  states:any = [
    'Adilabad',
    'Anantapur',
    'Chittoor',
    'Kakinada',
    'Guntur',
    'Hyderabad',
    'Karimnagar',
    'Khammam',
    'Krishna',
    'Kurnool',
    'Mahbubnagar',
    'Medak',
    'Nalgonda',
    'Nizamabad',
    'Ongole',
    'Hyderabad',
    'Srikakulam',
    'Nellore',
    'Visakhapatnam',
    'Vizianagaram',
    'Warangal',
    'Eluru',
    'Kadapa'
  ]

  onSelect(item){
    this.term = item;
  }
```
**app.component.html**
```html
<input type="text" [(ngModel)]="term" placeholder="States">
<ngconf-typeahead
(onSelect)="onSelect($event)" 
[typeaheads] = "states" 
[term]="term"
[stop]="stop"
></ngconf-typeahead>
```

## Explanation on Component Properties  
1 (onSelect) event is triggered when user interact with the typeahead list showed.  
2 [typeaheads] this input property is to take the data for typeahead preview filter.  
3 [term] this input property is for binding user input to the filter.  
4 [stop] this input property is for force stop typeahead functionality.  
> That's it you are good to go. Happy Coding :)
