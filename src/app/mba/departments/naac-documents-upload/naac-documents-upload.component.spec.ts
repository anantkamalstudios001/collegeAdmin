import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacDocumentsUploadComponent } from './naac-documents-upload.component';

describe('NaacDocumentsUploadComponent', () => {
  let component: NaacDocumentsUploadComponent;
  let fixture: ComponentFixture<NaacDocumentsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaacDocumentsUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaacDocumentsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
