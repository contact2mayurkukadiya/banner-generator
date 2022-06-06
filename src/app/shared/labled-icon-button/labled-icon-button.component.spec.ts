import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabledIconButtonComponent } from './labled-icon-button.component';

describe('LabledIconButtonComponent', () => {
  let component: LabledIconButtonComponent;
  let fixture: ComponentFixture<LabledIconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabledIconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabledIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
