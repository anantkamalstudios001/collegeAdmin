import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationEditorComponent } from './contact-information-editor.component';

describe('ContactInformationEditorComponent', () => {
  let component: ContactInformationEditorComponent;
  let fixture: ComponentFixture<ContactInformationEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInformationEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInformationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
