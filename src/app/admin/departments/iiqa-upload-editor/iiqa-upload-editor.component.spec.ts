import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IiqaUploadEditorComponent } from './iiqa-upload-editor.component';

describe('IiqaUploadEditorComponent', () => {
  let component: IiqaUploadEditorComponent;
  let fixture: ComponentFixture<IiqaUploadEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IiqaUploadEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IiqaUploadEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
