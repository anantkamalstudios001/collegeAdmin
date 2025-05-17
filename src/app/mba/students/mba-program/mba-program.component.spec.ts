import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbaProgramComponent } from './mba-program.component';

describe('MbaProgramComponent', () => {
  let component: MbaProgramComponent;
  let fixture: ComponentFixture<MbaProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MbaProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbaProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
