/* To build this library use ng build registration-form */


import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { RegistrationFormService } from './registration-form.service';

@Component({
  selector: 'rf-registration-form',
  template: `
    <p>
      registration-form works  updating... !
      {{ name }}
    </p>
  `,
  styles: [
  ]
})
export class RegistrationFormComponent  implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input() name= 'No Name';
  constructor(private regForm: RegistrationFormService) {
    console.log('called constructor');
  }
  ngOnInit(): void {
    console.log("ngOnInit is called");
    this.regForm.getUsers().subscribe((users)=>{
        console.log(users);
    })
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    console.log("ngOnChanges is called");
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
