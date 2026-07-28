import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Course } from '../models/course';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      map((courses) => {
        return courses.map((course) => ({
          ...course,
          code: course.code.toUpperCase(),
        }));
      }),
      catchError((error) => {
        console.error('API Error intercepted in Service:', error);
        return throwError(() => new Error('Failed to fetch courses from the API.'));
      }),
    );
  }

  getCourseById(id: number): Observable<Course> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Course>(url).pipe(
      catchError((error) => {
        console.error(`Error fetching course ${id}:`, error);
        return throwError(() => new Error('Course not found.'));
      }),
    );
  }

  addCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      catchError((error) => {
        console.error('Error adding course:', error);
        return throwError(() => new Error('Failed to create course.'));
      }),
    );
  }

  updateCourse(course: Course): Observable<Course> {
    const url = `${this.apiUrl}/${course.id}`;
    return this.http.put<Course>(url, course).pipe(
      catchError((error) => {
        console.error(`Error updating course ${course.id}:`, error);
        return throwError(() => new Error('Failed to update course.'));
      }),
    );
  }

  deleteCourse(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError((error) => {
        console.error(`Error deleting course ${id}:`, error);
        return throwError(() => new Error('Failed to delete course.'));
      }),
    );
  }
}
