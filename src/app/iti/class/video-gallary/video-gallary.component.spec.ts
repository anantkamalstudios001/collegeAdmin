import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGallaryComponent } from './video-gallary.component';

describe('VideoGallaryComponent', () => {
  let component: VideoGallaryComponent;
  let fixture: ComponentFixture<VideoGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGallaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
