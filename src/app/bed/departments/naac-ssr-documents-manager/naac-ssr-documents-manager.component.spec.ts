import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacSsrDocumentsManagerComponent } from './naac-ssr-documents-manager.component';

describe('NaacSsrDocumentsManagerComponent', () => {
  let component: NaacSsrDocumentsManagerComponent;
  let fixture: ComponentFixture<NaacSsrDocumentsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaacSsrDocumentsManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaacSsrDocumentsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
