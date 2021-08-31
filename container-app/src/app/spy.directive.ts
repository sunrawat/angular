import { Directive, OnDestroy, OnInit } from '@angular/core';
let nextId = 1;
@Directive({
  selector: '[surajSpy]'
})
export class SpyDirective implements OnInit, OnDestroy {
  id: number = nextId++;
  constructor() { }
  ngOnInit()  {
    console.log(`Spy # ${this.id} onInit`)
  }
  ngOnDestroy() {
    console.log(`Spy # ${this.id} onDestory`)
  }
}
