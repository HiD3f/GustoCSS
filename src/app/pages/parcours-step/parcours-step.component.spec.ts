import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursStepComponent } from './parcours-step.component';

describe('ParcoursStepComponent', () => {
  let component: ParcoursStepComponent;
  let fixture: ComponentFixture<ParcoursStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
