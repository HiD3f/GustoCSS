import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHeroComponent } from './demo-hero.component';

describe('DemoHeroComponent', () => {
  let component: DemoHeroComponent;
  let fixture: ComponentFixture<DemoHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
