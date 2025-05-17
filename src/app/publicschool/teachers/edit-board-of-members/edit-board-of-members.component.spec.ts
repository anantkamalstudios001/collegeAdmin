import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoardOfMembersComponent } from './edit-board-of-members.component';

describe('EditBoardOfMembersComponent', () => {
  let component: EditBoardOfMembersComponent;
  let fixture: ComponentFixture<EditBoardOfMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBoardOfMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBoardOfMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
