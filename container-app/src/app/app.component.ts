import { Component } from '@angular/core';

@Component({
  selector: 'suraj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'container-app';
  constructor(){
    console.log('called constructor');
  }
}
