import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsHighlightEditorComponent } from './events-highlight-editor.component';

describe('EventsHighlightEditorComponent', () => {
  let component: EventsHighlightEditorComponent;
  let fixture: ComponentFixture<EventsHighlightEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsHighlightEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsHighlightEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
