import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPlacementDepartmentEditorComponent } from './about-placement-department-editor.component';

describe('AboutPlacementDepartmentEditorComponent', () => {
  let component: AboutPlacementDepartmentEditorComponent;
  let fixture: ComponentFixture<AboutPlacementDepartmentEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPlacementDepartmentEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPlacementDepartmentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
