import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'suraj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  title = 'container-app';
  constructor(){
    console.log('called constructor');
  }

  ngOnChanges(){
    console.log("ngOnChanges is called");
  }
  ngOnInit(){
    console.log("ngOnInit is called");
  }
  ngDoCheck(){
    console.log("ngDoCheck is called");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit is called");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked is called");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit is called");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is called");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy is called");
  }
}
