import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentFrom } from './enrollment-form';

describe('EnrollmentForm', () => {
  let component: EnrollmentFrom;
  let fixture: ComponentFixture<EnrollmentFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentFrom],
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
