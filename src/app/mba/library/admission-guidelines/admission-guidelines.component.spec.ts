import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionGuidelinesComponent } from './admission-guidelines.component';

describe('AdmissionGuidelinesComponent', () => {
  let component: AdmissionGuidelinesComponent;
  let fixture: ComponentFixture<AdmissionGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionGuidelinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
