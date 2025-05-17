import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeHistoryComponent } from './college-history.component';

describe('CollegeHistoryComponent', () => {
  let component: CollegeHistoryComponent;
  let fixture: ComponentFixture<CollegeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
