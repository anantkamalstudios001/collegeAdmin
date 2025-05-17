import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPlacementsRecordComponent } from './student-placements-record.component';

describe('StudentPlacementsRecordComponent', () => {
  let component: StudentPlacementsRecordComponent;
  let fixture: ComponentFixture<StudentPlacementsRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPlacementsRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPlacementsRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
