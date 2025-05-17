import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentsDeskMessageEditorComponent } from './presidents-desk-message-editor.component';

describe('PresidentsDeskMessageEditorComponent', () => {
  let component: PresidentsDeskMessageEditorComponent;
  let fixture: ComponentFixture<PresidentsDeskMessageEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresidentsDeskMessageEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresidentsDeskMessageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
