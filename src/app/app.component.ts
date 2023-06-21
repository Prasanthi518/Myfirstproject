import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';
  menu = [

    {

      displayName: 'Home',

      iconName: '',

      route: '',

    },

    {

      displayName: 'About',

      iconName: '',

      route: 'about',

    },
    {

      displayName: 'Contact',

      iconName: '',

      route: 'contact',

    }

  ];
  name = "HELLO WORLD";
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
} 
