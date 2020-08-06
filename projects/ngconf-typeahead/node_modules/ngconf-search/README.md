# NgxSearch Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

> ![ngconf-search](https://img.icons8.com/color/48/000000/search.png "Search Feature") Search Feature for Angular.  


### Demo Link   
[Stackblitz Demo](https://stackblitz.com/edit/angular-ivy-behdte "ngconf-search Demo") 

## Step - 1

> npm i ngconf-search --save  
[NPM Package Link](https://www.npmjs.com/package/ngconf-search "ngconf-search")  

import NgconfSearchModule in **app.module.ts** file.  
**app.module.ts**
```javascript
import {NgconfSearchModule} from 'ngconf-search';
 imports: [
    NgconfSearchModule
  ]
  ```

## Step - 2
Declare two global variables **term,prop** in **app.component.ts** file.  
term is to for binding search term of user.  
prop is for search based on specific property of array.
**app.component.ts**
 ```javascript
  testArray:any = [];
  term:any = "";
  prop:any = "";
```
**app.component.html**
```html
<input type="text" [(ngModel)]="term" [value]="term" placeholder="Search">
<div *ngIf="testArray.length>0">
   <div *ngFor="let item of testArray | searchFilter: { term: term, prop: prop }" >
      {{item.name}} || {{item.phno}} 
   </div>
   
</div>
```

## Argument Configuration
Prop can be left with empty string if you want search based on all fields. If you want search based on specific field a dropdown can be binded to prop  
and result change according to user input to dropdown.
```javascript
export interface opt {
  term: string;
  prop: string;
}
```
> That's it you are good to go. Happy Coding :)
