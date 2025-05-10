import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { ImageGallaryComponent } from './image-gallary/image-gallary.component';
import { VideoGallaryComponent } from './video-gallary/video-gallary.component';
import { CategoryComponent } from './category/category.component';

export const CLASS_ROUTE: Route[] = [
  {
    path: 'image-gallary',
    component: ImageGallaryComponent,
  },
  {
    path: 'video-gallary',
    component: VideoGallaryComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  { path: '**', component: Page404Component },
];
