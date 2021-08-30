import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor() { }
  Init(){
    console.log("called")
    return new Promise((resolve, reject)=> {
      setTimeout(()=>{
        console.log('app init recived data');
        resolve('recieved value');
      },2000)
    })
  }
}
