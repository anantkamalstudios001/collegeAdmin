import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadamicCalenderComponent } from './acadamic-calender.component';

describe('AcadamicCalenderComponent', () => {
  let component: AcadamicCalenderComponent;
  let fixture: ComponentFixture<AcadamicCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcadamicCalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcadamicCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
