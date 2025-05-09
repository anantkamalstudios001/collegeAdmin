import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { LeaveRequestService } from '../../leave-request.service';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  id: number;
  class: string;
  section: string;
  applyDate: string;
}

@Component({
    selector: 'app-std-leave-request-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.scss'],
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButtonModule,
        MatDialogClose,
        DatePipe,
    ]
})
export class StdLeaveRequestDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<StdLeaveRequestDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public leaveRequestService: LeaveRequestService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.leaveRequestService.deleteLeaveRequest(this.data.id);
  }
}
