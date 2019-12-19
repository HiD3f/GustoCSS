import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProductComponent } from './demo-product.component';

describe('DemoProductComponent', () => {
  let component: DemoProductComponent;
  let fixture: ComponentFixture<DemoProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
