import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanBoxComponent } from './loan-box.component';

describe('LoanBoxComponent', () => {
  let component: LoanBoxComponent;
  let fixture: ComponentFixture<LoanBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
