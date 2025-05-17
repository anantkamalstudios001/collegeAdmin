import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCommitteesManagerComponent } from './college-committees-manager.component';

describe('CollegeCommitteesManagerComponent', () => {
  let component: CollegeCommitteesManagerComponent;
  let fixture: ComponentFixture<CollegeCommitteesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeCommitteesManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeCommitteesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
