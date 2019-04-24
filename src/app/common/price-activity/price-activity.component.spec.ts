import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceActivityComponent } from './price-activity.component';

describe('PriceActivityComponent', () => {
  let component: PriceActivityComponent;
  let fixture: ComponentFixture<PriceActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
