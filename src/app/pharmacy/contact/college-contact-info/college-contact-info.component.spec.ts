import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeContactInfoComponent } from './college-contact-info.component';

describe('CollegeContactInfoComponent', () => {
  let component: CollegeContactInfoComponent;
  let fixture: ComponentFixture<CollegeContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeContactInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
