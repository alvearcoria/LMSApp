import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../service/courses/courses.service';
import { Lesson, Course } from '../../data';

@Component({
  selector: 'lms-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  courseId: number;
  lessonId: number;
  lesson: Lesson | undefined;
  course: Course | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {
    this.route.params.subscribe(params => {
      this.courseId = +params['courseId'];
      this.lessonId = +params['lessonId'];
      this.loadLesson();
    });
  }

  ngOnInit(): void {
    this.course = this.courseService.getCourse(this.courseId);
  }

  loadLesson(): void {
    this.lesson = this.courseService.getLesson(this.courseId, this.lessonId);
    if (this.lesson && !this.lesson.completed) {
      this.lesson.completed = true;
      this.calculateCourseProgress();
    }
  }

  calculateCourseProgress(): void {
    if (this.course) {
      const completedLessons = this.course.lessons.filter(lesson => lesson.completed).length;
      const progress = (completedLessons / this.course.lessons.length) * 100;
      this.course.progress = progress;
    }
  }

  goToNextLesson(): void {
    if (this.course && this.lessonId < this.course.lessons.length) {
      this.router.navigate(['/pages/course', this.courseId, 'lesson', this.lessonId + 1]);
    }
  }

  goToPreviousLesson(): void {
    if (this.lessonId > 1) {
      this.router.navigate(['/pages/course', this.courseId, 'lesson', this.lessonId - 1]);
    }
  }

  goToCourseContent(): void {
    this.router.navigate(['/pages/course', this.courseId]);
  }
}

