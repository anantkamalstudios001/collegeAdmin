import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredNoticesComponent } from './expired-notices.component';

describe('ExpiredNoticesComponent', () => {
  let component: ExpiredNoticesComponent;
  let fixture: ComponentFixture<ExpiredNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiredNoticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiredNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
