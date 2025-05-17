import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCommitteeManagementComponent } from './local-committee-management.component';

describe('LocalCommitteeManagementComponent', () => {
  let component: LocalCommitteeManagementComponent;
  let fixture: ComponentFixture<LocalCommitteeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalCommitteeManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalCommitteeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
