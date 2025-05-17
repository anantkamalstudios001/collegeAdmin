import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAccessComponent } from './library-access.component';

describe('LibraryAccessComponent', () => {
  let component: LibraryAccessComponent;
  let fixture: ComponentFixture<LibraryAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
