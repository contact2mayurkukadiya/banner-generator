import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularAngleControlComponent } from './circular-angle-control.component';

describe('CircularAngleControlComponent', () => {
  let component: CircularAngleControlComponent;
  let fixture: ComponentFixture<CircularAngleControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularAngleControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularAngleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
