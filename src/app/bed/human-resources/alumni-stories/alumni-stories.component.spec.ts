import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniStoriesComponent } from './alumni-stories.component';

describe('AlumniStoriesComponent', () => {
  let component: AlumniStoriesComponent;
  let fixture: ComponentFixture<AlumniStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
