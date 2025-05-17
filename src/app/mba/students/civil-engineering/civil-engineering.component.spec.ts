import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilEngineeringComponent } from './civil-engineering.component';

describe('CivilEngineeringComponent', () => {
  let component: CivilEngineeringComponent;
  let fixture: ComponentFixture<CivilEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivilEngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
