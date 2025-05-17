import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalEngineeringComponent } from './electrical-engineering.component';

describe('ElectricalEngineeringComponent', () => {
  let component: ElectricalEngineeringComponent;
  let fixture: ComponentFixture<ElectricalEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricalEngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
