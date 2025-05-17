import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqarReportsSupportingDocumentsUploadComponent } from './aqar-reports-supporting-documents-upload.component';

describe('AqarReportsSupportingDocumentsUploadComponent', () => {
  let component: AqarReportsSupportingDocumentsUploadComponent;
  let fixture: ComponentFixture<AqarReportsSupportingDocumentsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AqarReportsSupportingDocumentsUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AqarReportsSupportingDocumentsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
