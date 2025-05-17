import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionStatusToggleComponent } from './admission-status-toggle.component';

describe('AdmissionStatusToggleComponent', () => {
  let component: AdmissionStatusToggleComponent;
  let fixture: ComponentFixture<AdmissionStatusToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionStatusToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionStatusToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
