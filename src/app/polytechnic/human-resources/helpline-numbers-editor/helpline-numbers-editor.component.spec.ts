import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplineNumbersEditorComponent } from './helpline-numbers-editor.component';

describe('HelplineNumbersEditorComponent', () => {
  let component: HelplineNumbersEditorComponent;
  let fixture: ComponentFixture<HelplineNumbersEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelplineNumbersEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelplineNumbersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
