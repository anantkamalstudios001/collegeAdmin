import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormSubmissionViewerComponent } from './contact-form-submission-viewer.component';

describe('ContactFormSubmissionViewerComponent', () => {
  let component: ContactFormSubmissionViewerComponent;
  let fixture: ComponentFixture<ContactFormSubmissionViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormSubmissionViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormSubmissionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
