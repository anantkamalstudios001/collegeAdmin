import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMaterialUploadComponent } from './study-material-upload.component';

describe('StudyMaterialUploadComponent', () => {
  let component: StudyMaterialUploadComponent;
  let fixture: ComponentFixture<StudyMaterialUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyMaterialUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyMaterialUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
