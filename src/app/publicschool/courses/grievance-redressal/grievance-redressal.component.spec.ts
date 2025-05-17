import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceRedressalComponent } from './grievance-redressal.component';

describe('GrievanceRedressalComponent', () => {
  let component: GrievanceRedressalComponent;
  let fixture: ComponentFixture<GrievanceRedressalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrievanceRedressalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrievanceRedressalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
