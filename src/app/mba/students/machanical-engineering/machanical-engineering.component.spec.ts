import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachanicalEngineeringComponent } from './machanical-engineering.component';

describe('MachanicalEngineeringComponent', () => {
  let component: MachanicalEngineeringComponent;
  let fixture: ComponentFixture<MachanicalEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachanicalEngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachanicalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
