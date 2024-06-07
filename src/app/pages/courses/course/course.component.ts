import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../service/courses/courses.service';
import { Course } from '../../data';

@Component({
  selector: 'lms-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseId: number;
  course: Course | undefined;
  progress: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {
    this.courseId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.course = this.courseService.getCourse(this.courseId);
    this.calculateProgress();
  }

  calculateProgress(): void {
    if (this.course) {
      const completedLessons = this.course.lessons.filter(lesson => lesson.completed).length;
      this.progress = (completedLessons / this.course.lessons.length) * 100;
    }
  }

  viewLesson(lessonId: number): void {
    this.router.navigate(['/pages/course', this.courseId, 'lesson', lessonId]);
  }
}

