import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCRUDOprationComponent } from './admin-crudopration.component';

describe('AdminCRUDOprationComponent', () => {
  let component: AdminCRUDOprationComponent;
  let fixture: ComponentFixture<AdminCRUDOprationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCRUDOprationComponent]
    });
    fixture = TestBed.createComponent(AdminCRUDOprationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
