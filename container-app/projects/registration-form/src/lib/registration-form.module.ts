import { NgModule } from '@angular/core';
import { RegistrationFormComponent } from './registration-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegistrationFormComponent,
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    RegistrationFormComponent
  ]
})
export class RegistrationFormModule { }
