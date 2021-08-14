import { Component, OnInit } from '@angular/core';
import { RegistrationFormService } from './registration-form.service';

@Component({
  selector: 'rf-registration-form',
  template: `
    <p>
      registration-form works  updating... !
    </p>
  `,
  styles: [
  ]
})
export class RegistrationFormComponent implements OnInit {

  constructor(private regForm: RegistrationFormService) { }
  ngOnInit(): void {
    this.regForm.getUsers().subscribe((users)=>{
        console.log(users);
    })
  }

}
