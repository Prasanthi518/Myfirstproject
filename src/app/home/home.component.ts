import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['p { color:blue}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent {
  addItem(newItem:string){​​​​​​​console.log(newItem);}​​​​​​​​​​​​​​
}
