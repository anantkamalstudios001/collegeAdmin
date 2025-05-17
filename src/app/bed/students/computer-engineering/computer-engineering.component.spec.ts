import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerEngineeringComponent } from './computer-engineering.component';

describe('ComputerEngineeringComponent', () => {
  let component: ComputerEngineeringComponent;
  let fixture: ComponentFixture<ComputerEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerEngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
