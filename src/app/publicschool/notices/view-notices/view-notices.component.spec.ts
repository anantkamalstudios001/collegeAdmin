import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNoticesComponent } from './view-notices.component';

describe('ViewNoticesComponent', () => {
  let component: ViewNoticesComponent;
  let fixture: ComponentFixture<ViewNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewNoticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
