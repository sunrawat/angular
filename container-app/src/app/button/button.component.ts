import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';


@Component({
  selector: 'suraj-button',
  template: `
    <p>
      button works!
      <button (click)="go();">{{label}}</button>
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {

  @Input() label = 'default label';
  @Output() acton = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  go() {
    this.acton.emit(123)
  }


}
