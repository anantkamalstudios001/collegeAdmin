import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsAndCommitteesComponent } from './clubs-and-committees.component';

describe('ClubsAndCommitteesComponent', () => {
  let component: ClubsAndCommitteesComponent;
  let fixture: ComponentFixture<ClubsAndCommitteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubsAndCommitteesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubsAndCommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
