import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientPickerComponent } from './gradient-picker.component';

describe('GradientPickerComponent', () => {
  let component: GradientPickerComponent;
  let fixture: ComponentFixture<GradientPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
