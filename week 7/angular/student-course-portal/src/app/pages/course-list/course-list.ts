import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard, HighlightDirective],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css'],
})
export class CourseList implements OnInit {
  selectedCourseId: number | null = null;
  courses$!: Observable<Course[]>;

  errorMessage: string | null = null;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses$ = this.courseService.getCourses().pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        return of([]);
      }),
    );
  }

  onEnroll(courseId: number) {
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
  testAddCourse() {
    const newCourse = {
      name: 'Advanced Web APIs',
      code: 'cs301',
      credits: 4,
      gradeStatus: 'pending' as const,
    };

    this.courseService.addCourse(newCourse).subscribe({
      next: (createdCourse) => {
        console.log('Successfully created:', createdCourse);

        this.courses$ = this.courseService.getCourses().pipe(
          catchError((err) => {
            this.errorMessage = err.message;
            return of([]);
          }),
        );
      },
      error: (err) => {
        this.errorMessage = err.message;
      },
    });
  }
}
