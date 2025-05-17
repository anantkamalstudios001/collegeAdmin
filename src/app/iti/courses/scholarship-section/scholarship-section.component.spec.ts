import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipSectionComponent } from './scholarship-section.component';

describe('ScholarshipSectionComponent', () => {
  let component: ScholarshipSectionComponent;
  let fixture: ComponentFixture<ScholarshipSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarshipSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScholarshipSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
