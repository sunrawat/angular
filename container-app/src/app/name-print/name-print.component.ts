import { Component, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'suraj-name-print',
  template: `
     <input  (change)="changeName($event)">
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NamePrintComponent implements OnInit {
  @Output() saveName= new EventEmitter();
  constructor() { }
  changeName(name: Event) {
    const nameTemp = (<HTMLInputElement>name.target).value;
    this.saveName.emit({name: "suraj", age: 31});
  }
  ngOnInit(): void {
  }

}
