import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyDesclaimerEditorComponent } from './privacy-desclaimer-editor.component';

describe('PrivacyDesclaimerEditorComponent', () => {
  let component: PrivacyDesclaimerEditorComponent;
  let fixture: ComponentFixture<PrivacyDesclaimerEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyDesclaimerEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyDesclaimerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
