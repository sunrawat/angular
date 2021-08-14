import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrationFormModule } from 'registration-form';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RegistrationFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
