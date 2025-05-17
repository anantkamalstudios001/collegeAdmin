import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstYearEngineeringComponent } from './first-year-engineering.component';

describe('FirstYearEngineeringComponent', () => {
  let component: FirstYearEngineeringComponent;
  let fixture: ComponentFixture<FirstYearEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstYearEngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstYearEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
