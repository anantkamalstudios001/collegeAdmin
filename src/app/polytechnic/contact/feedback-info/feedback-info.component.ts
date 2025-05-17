import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-feedback-info',
  imports: [
    ReactiveFormsModule,
    CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatOptionModule,
            MatDatepickerModule,
            MatButtonModule,
            MatIconModule,
            BreadcrumbComponent

  ],
  templateUrl: './feedback-info.component.html',
  styleUrl: './feedback-info.component.scss'
})
export class FeedbackInfoComponent {
   feedbackForm!: FormGroup;
     breadscrums = [
    {
      title: 'Feedback Info',
      items: ['Contact'],
      active: 'Feedback Info',
    },
  ];
    feedbacks = [
  {
    _id: '1',
    name: 'Aarav Shah',
    email: 'aarav.shah@example.com',
    category: 'Website Bug',
    rating: 3,
    message: 'The contact form is not submitting properly.',
    date: new Date('2025-04-25'),
    status: 'Pending'
  },
  {
    _id: '2',
    name: 'Riya Verma',
    email: 'riya.verma@example.com',
    category: 'General Feedback',
    rating: 5,
    message: 'Great website experience and easy navigation!',
    date: new Date('2025-04-27'),
    status: 'Reviewed'
  },
  {
    _id: '3',
    name: 'Karan Mehta',
    email: 'karan.mehta@example.com',
    category: 'Course Info',
    rating: 4,
    message: 'Please update the B.Sc course syllabus on the website.',
    date: new Date('2025-05-01'),
    status: 'Resolved'
  },
  {
    _id: '4',
    name: 'Sneha Patil',
    email: 'sneha.patil@example.com',
    category: 'Faculty Suggestion',
    rating: 2,
    message: 'Kindly assign a different faculty for Data Structures.',
    date: new Date('2025-05-03'),
    status: 'Pending'
  },
  {
    _id: '5',
    name: 'Rahul Kulkarni',
    email: 'rahul.kulkarni@example.com',
    category: 'Website Design',
    rating: 4,
    message: 'Add a dark mode option on the site.',
    date: new Date('2025-05-07'),
    status: 'Reviewed'
  }
];

  constructor(private fb: FormBuilder) {}
searchTerm: string = '';
ngOnInit(): void {
  this.fetchFeedbacks();
}

fetchFeedbacks() {
  // this.feedbackService.getAllFeedbacks().subscribe((data) => {
  //   this.feedbacks = data;
  // });
}

filteredFeedbacks() {
  return this.feedbacks.filter(fb =>
    fb.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    fb.email.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

viewFeedback(fb: any) {
  // open dialog or new page
}

markAsReviewed(fb: any) {
  fb.status = 'Reviewed';
  // this.feedbackService.updateStatus(fb._id, 'Reviewed').subscribe();
}

deleteFeedback(id: string) {
  if (confirm('Are you sure you want to delete this feedback?')) {
    // this.feedbackService.deleteFeedback(id).subscribe(() => {
    //   this.feedbacks = this.feedbacks.filter(f => f._id !== id);
    // });
  }
}



}



