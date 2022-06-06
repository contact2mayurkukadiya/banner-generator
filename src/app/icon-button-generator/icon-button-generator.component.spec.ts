import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonGeneratorComponent } from './icon-button-generator.component';

describe('IconButtonGeneratorComponent', () => {
  let component: IconButtonGeneratorComponent;
  let fixture: ComponentFixture<IconButtonGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconButtonGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
