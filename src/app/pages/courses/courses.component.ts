import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../service/courses/courses.service';
import { Course } from '../data';

@Component({
  selector: 'lms-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  viewCourseContent(courseId: number): void {
    this.router.navigate(['/pages/course', courseId]);
  }
}


