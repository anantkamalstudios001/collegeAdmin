import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusMapEmbedEditorComponent } from './campus-map-embed-editor.component';

describe('CampusMapEmbedEditorComponent', () => {
  let component: CampusMapEmbedEditorComponent;
  let fixture: ComponentFixture<CampusMapEmbedEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampusMapEmbedEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusMapEmbedEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
