import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizeAdmissionResultsEventsComponent } from './categorize-admission-results-events.component';

describe('CategorizeAdmissionResultsEventsComponent', () => {
  let component: CategorizeAdmissionResultsEventsComponent;
  let fixture: ComponentFixture<CategorizeAdmissionResultsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorizeAdmissionResultsEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorizeAdmissionResultsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
