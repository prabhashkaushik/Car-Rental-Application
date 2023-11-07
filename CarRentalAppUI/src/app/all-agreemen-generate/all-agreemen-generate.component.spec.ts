import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAgreemenGenerateComponent } from './all-agreemen-generate.component';

describe('AllAgreemenGenerateComponent', () => {
  let component: AllAgreemenGenerateComponent;
  let fixture: ComponentFixture<AllAgreemenGenerateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAgreemenGenerateComponent]
    });
    fixture = TestBed.createComponent(AllAgreemenGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
