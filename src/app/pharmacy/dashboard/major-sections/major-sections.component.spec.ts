import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorSectionsComponent } from './major-sections.component';

describe('MajorSectionsComponent', () => {
  let component: MajorSectionsComponent;
  let fixture: ComponentFixture<MajorSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MajorSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
