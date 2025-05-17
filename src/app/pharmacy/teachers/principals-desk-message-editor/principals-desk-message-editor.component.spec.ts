import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalsDeskMessageEditorComponent } from './principals-desk-message-editor.component';

describe('PrincipalsDeskMessageEditorComponent', () => {
  let component: PrincipalsDeskMessageEditorComponent;
  let fixture: ComponentFixture<PrincipalsDeskMessageEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalsDeskMessageEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalsDeskMessageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
