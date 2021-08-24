import { AppInitService } from './app-init.service';
import { APP_INITIALIZER, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrationFormModule } from 'registration-form';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';

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
    ButtonComponent,
  ],
  entryComponents:[ButtonComponent],
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
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const custBtn = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('suraj-button', custBtn);
  }
}
