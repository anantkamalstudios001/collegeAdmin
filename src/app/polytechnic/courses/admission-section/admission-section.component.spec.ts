import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionSectionComponent } from './admission-section.component';

describe('AdmissionSectionComponent', () => {
  let component: AdmissionSectionComponent;
  let fixture: ComponentFixture<AdmissionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
