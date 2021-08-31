import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suraj-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  hero = 'Magneta';
  constructor() { }

  ngOnInit(): void {
  }

}
