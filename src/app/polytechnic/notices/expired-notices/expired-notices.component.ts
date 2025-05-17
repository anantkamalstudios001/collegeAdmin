import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-expired-notices',
  imports: [
       CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    BreadcrumbComponent
  ],
  templateUrl: './expired-notices.component.html',
  styleUrl: './expired-notices.component.scss'
})
export class ExpiredNoticesComponent {
        breadscrums = [
    {
      title: 'Expired Notices',
      items: ['Notices'],
      active: 'Expired Notices',
    },
  ];

    displayedColumns: string[] = ['title', 'category', 'startDate', 'endDate', 'actions'];
  
  noticeList = [
    {
      "_id": "1",
      "title": "College Reopening Notice",
      "category": "General",
      "startDate": "2025-05-01T00:00:00.000Z",
      "endDate": "2025-05-10T00:00:00.000Z"
    },
    {
      "_id": "2",
      "title": "Exam Schedule for Semester 2",
      "category": "Exams",
      "startDate": "2025-05-15T00:00:00.000Z",
      "endDate": "2025-05-30T00:00:00.000Z"
    },
    {
      "_id": "3",
      "title": "Library Closed on Weekend",
      "category": "Library",
      "startDate": "2025-05-11T00:00:00.000Z",
      "endDate": null
    },
    {
      "_id": "4",
      "title": "New Course Enrollment Open",
      "category": "Academics",
      "startDate": "2025-05-05T00:00:00.000Z",
      "endDate": "2025-06-01T00:00:00.000Z"
    }
  ];

  expiredNotices: any[] = [];
  loading = false;

  ngOnInit(): void {
    this.fetchExpiredNotices();
  }

  fetchExpiredNotices(): void {
    this.loading = true;
    // Filter expired notices based on the current date and endDate field
    const currentDate = new Date();
    this.expiredNotices = this.noticeList.filter((notice: any) => {
      const endDate = notice.endDate ? new Date(notice.endDate) : null;
      return endDate && endDate < currentDate; // Notice expired if endDate < currentDate
    });
    this.loading = false;
  }

  onEdit(notice: any): void {
    console.log('Edit:', notice);
  }

  onDelete(id: string): void {
    console.log('Delete expired notice with ID:', id);
  }

}
