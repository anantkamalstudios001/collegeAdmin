import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiCommitteeMemberManagerComponent } from './rti-committee-member-manager.component';

describe('RtiCommitteeMemberManagerComponent', () => {
  let component: RtiCommitteeMemberManagerComponent;
  let fixture: ComponentFixture<RtiCommitteeMemberManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtiCommitteeMemberManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtiCommitteeMemberManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
