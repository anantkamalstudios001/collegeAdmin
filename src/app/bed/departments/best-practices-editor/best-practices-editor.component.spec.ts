import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPracticesEditorComponent } from './best-practices-editor.component';

describe('BestPracticesEditorComponent', () => {
  let component: BestPracticesEditorComponent;
  let fixture: ComponentFixture<BestPracticesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestPracticesEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestPracticesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
