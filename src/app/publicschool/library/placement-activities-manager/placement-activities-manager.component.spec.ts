import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementActivitiesManagerComponent } from './placement-activities-manager.component';

describe('PlacementActivitiesManagerComponent', () => {
  let component: PlacementActivitiesManagerComponent;
  let fixture: ComponentFixture<PlacementActivitiesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementActivitiesManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementActivitiesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
