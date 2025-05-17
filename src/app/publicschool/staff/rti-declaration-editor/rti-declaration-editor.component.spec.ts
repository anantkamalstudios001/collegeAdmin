import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiDeclarationEditorComponent } from './rti-declaration-editor.component';

describe('RtiDeclarationEditorComponent', () => {
  let component: RtiDeclarationEditorComponent;
  let fixture: ComponentFixture<RtiDeclarationEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtiDeclarationEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtiDeclarationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
