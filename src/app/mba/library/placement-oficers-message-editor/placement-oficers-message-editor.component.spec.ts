import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementOficersMessageEditorComponent } from './placement-oficers-message-editor.component';

describe('PlacementOficersMessageEditorComponent', () => {
  let component: PlacementOficersMessageEditorComponent;
  let fixture: ComponentFixture<PlacementOficersMessageEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementOficersMessageEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementOficersMessageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
