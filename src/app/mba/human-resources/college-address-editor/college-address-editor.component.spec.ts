import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeAddressEditorComponent } from './college-address-editor.component';

describe('CollegeAddressEditorComponent', () => {
  let component: CollegeAddressEditorComponent;
  let fixture: ComponentFixture<CollegeAddressEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeAddressEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeAddressEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
