import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },

  {
    path: 'courses',
    loadComponent: () => import('./pages/course-list/course-list').then((m) => m.CourseList),
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/student-profile/student-profile').then((m) => m.StudentProfile),
    canActivate: [authGuard],
  },
];
