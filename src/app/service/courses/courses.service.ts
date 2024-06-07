import { Injectable } from '@angular/core';
import { Course, COURSES, Lesson } from '../../pages/data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourses(): Course[] {
    return COURSES;
  }

  getCourse(id: number): Course | undefined {
    return COURSES.find(course => course.id === id);
  }

  getLesson(courseId: number, lessonId: number): Lesson | undefined {
    const course = this.getCourse(courseId);
    return course?.lessons.find(lesson => lesson.id === lessonId);
  }
}
