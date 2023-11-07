import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrreemnetEditComponent } from './agrreemnet-edit.component';

describe('AgrreemnetEditComponent', () => {
  let component: AgrreemnetEditComponent;
  let fixture: ComponentFixture<AgrreemnetEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgrreemnetEditComponent]
    });
    fixture = TestBed.createComponent(AgrreemnetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
