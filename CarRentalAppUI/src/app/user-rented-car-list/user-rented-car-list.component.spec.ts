import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRentedCarListComponent } from './user-rented-car-list.component';

describe('UserRentedCarListComponent', () => {
  let component: UserRentedCarListComponent;
  let fixture: ComponentFixture<UserRentedCarListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRentedCarListComponent]
    });
    fixture = TestBed.createComponent(UserRentedCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
