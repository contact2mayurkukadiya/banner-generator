import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGeneratorComponent } from './button-generator.component';

describe('ButtonGeneratorComponent', () => {
  let component: ButtonGeneratorComponent;
  let fixture: ComponentFixture<ButtonGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
