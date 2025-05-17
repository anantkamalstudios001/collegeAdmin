import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersListManagerComponent } from './recruiters-list-manager.component';

describe('RecruitersListManagerComponent', () => {
  let component: RecruitersListManagerComponent;
  let fixture: ComponentFixture<RecruitersListManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitersListManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitersListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
