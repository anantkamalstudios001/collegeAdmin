import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineJournalsComponent } from './online-journals.component';

describe('OnlineJournalsComponent', () => {
  let component: OnlineJournalsComponent;
  let fixture: ComponentFixture<OnlineJournalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineJournalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
