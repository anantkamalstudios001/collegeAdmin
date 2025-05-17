import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniMeetsComponent } from './alumni-meets.component';

describe('AlumniMeetsComponent', () => {
  let component: AlumniMeetsComponent;
  let fixture: ComponentFixture<AlumniMeetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniMeetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniMeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
