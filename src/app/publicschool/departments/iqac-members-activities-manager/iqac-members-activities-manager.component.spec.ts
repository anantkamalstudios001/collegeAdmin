import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IqacMembersActivitiesManagerComponent } from './iqac-members-activities-manager.component';

describe('IqacMembersActivitiesManagerComponent', () => {
  let component: IqacMembersActivitiesManagerComponent;
  let fixture: ComponentFixture<IqacMembersActivitiesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IqacMembersActivitiesManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IqacMembersActivitiesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
