import { ChildComponent } from './child/child.component';
import { Component, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'suraj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  title = 'container-app';
  private prevHero = '';
  name = 'suraj rawat';
  heros = [1,2,3,4,5,6,7];
  @ViewChild(ChildComponent) childComponent: ChildComponent;
  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    console.log('ngAfterViewInit is called from app component');
   // this.doSomething();
  }
  ngAfterViewChecked() {
    if (this.prevHero === this.childComponent.hero) {
      console.log('ngAfterViewChecked is called from app component (no change)');
    }
    else{
      this.prevHero = this.childComponent.hero;
      console.log('ngAfterViewChecked is called from app component (changed)');
    }

  }
}
