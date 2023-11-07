import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsInputComponent } from './car-details-input.component';

describe('CarDetailsInputComponent', () => {
  let component: CarDetailsInputComponent;
  let fixture: ComponentFixture<CarDetailsInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarDetailsInputComponent]
    });
    fixture = TestBed.createComponent(CarDetailsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
