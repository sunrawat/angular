import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePrintComponent } from './name-print.component';

describe('NamePrintComponent', () => {
  let component: NamePrintComponent;
  let fixture: ComponentFixture<NamePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
