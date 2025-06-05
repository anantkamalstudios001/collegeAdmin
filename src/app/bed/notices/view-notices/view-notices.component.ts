import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { APIMAINService } from 'app/bed/apimain.service';

@Component({
  selector: 'app-view-notices',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    BreadcrumbComponent    
  ],
  templateUrl: './view-notices.component.html',
  styleUrls: ['./view-notices.component.scss']
})
export class ViewNoticesComponent implements OnInit {

  constructor(private APIService : APIMAINService) { }
  breadscrums = [
    {
      title: 'View Notices',
      items: ['Notices'],
      active: 'View Notices',
    },
  ];
  displayedColumns: string[] = ['title', 'category', 'startDate', 'endDate', 'actions'];
  
  noticeList :any[]= [];

  // noticeList = [
  //   {
  //     "_id": "1",
  //     "title": "College Reopening Notice",
  //     "category": "General",
  //     "startDate": "2025-05-01T00:00:00.000Z",
  //     "endDate": "2025-05-10T00:00:00.000Z"
  //   },
  //   {
  //     "_id": "2",
  //     "title": "Exam Schedule for Semester 2",
  //     "category": "Exams",
  //     "startDate": "2025-05-15T00:00:00.000Z",
  //     "endDate": "2025-05-30T00:00:00.000Z"
  //   },
  //   {
  //     "_id": "3",
  //     "title": "Library Closed on Weekend",
  //     "category": "Library",
  //     "startDate": "2025-05-11T00:00:00.000Z",
  //     "endDate": null
  //   },
  //   {
  //     "_id": "4",
  //     "title": "New Course Enrollment Open",
  //     "category": "Academics",
  //     "startDate": "2025-05-05T00:00:00.000Z",
  //     "endDate": "2025-06-01T00:00:00.000Z"
  //   }
  // ];

  loading = false;

  ngOnInit(): void {
    this.fetchNotices();
  }

  fetchNotices(): void {
    // Simulating async operation like fetching from an API
    // setTimeout(() => {
    //   this.loading = false; // Set loading to false after data is fetched
    // }, 2000); // 2-second delay to mimic data loading

    this.APIService.fetchNotices().subscribe((res:any) => {
      console.log(res)
      this.noticeList = res.notices;
    })
  }

  onEdit(notice: any): void {
    console.log('Edit:', notice);
  }

  onDelete(id: string): void {
    console.log('Delete notice with ID:', id);
  }
}
