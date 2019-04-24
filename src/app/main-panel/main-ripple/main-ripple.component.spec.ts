import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRippleComponent } from './main-ripple.component';

describe('MainRippleComponent', () => {
  let component: MainRippleComponent;
  let fixture: ComponentFixture<MainRippleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
