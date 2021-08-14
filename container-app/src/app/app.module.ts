import { AppInitService } from './app-init.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrationFormModule } from 'registration-form';

function appInitializationFn1(appInitService: AppInitService) {
  return ():Promise<any> =>{
    return appInitService.Init();
  }
}
function appInitializationFn2() {
  return():Promise<any> =>{
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve("done");
      console.log("called function 2");
    }, 2000)
   })
  }
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RegistrationFormModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializationFn1,
      multi: true,
      deps: [AppInitService]
    },
    {
    provide: APP_INITIALIZER,
    useFactory: appInitializationFn2,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('app module is called')
  }
}
