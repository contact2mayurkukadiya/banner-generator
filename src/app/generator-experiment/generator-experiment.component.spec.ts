import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorExperimentComponent } from './generator-experiment.component';

describe('GeneratorExperimentComponent', () => {
  let component: GeneratorExperimentComponent;
  let fixture: ComponentFixture<GeneratorExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
