import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementManagementComponent } from './announcement-management.component';

describe('AnnouncementManagementComponent', () => {
  let component: AnnouncementManagementComponent;
  let fixture: ComponentFixture<AnnouncementManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
