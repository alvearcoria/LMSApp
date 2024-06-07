import { NgModule } from '@angular/core';

import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbCardModule,
  NbSelectModule,
  NbIconModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbAccordionModule,
  NbActionsModule,
  NbBadgeModule,
  NbRadioModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbStepperModule,
  NbCalendarRangeModule,
  NbCalendarModule,
  NbListModule,

} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { LessonComponent } from './courses/lesson/lesson.component';
import { SafePipe } from './courses/lesson/safe.pipe';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,

    NbDatepickerModule,
    NbDialogModule,
    NbMenuModule,
    NbSidebarModule,
    NbToastrModule,
    NbWindowModule,
    NbCardModule,
    NbSelectModule,
    NbIconModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbAccordionModule,
    NbActionsModule,
    NbBadgeModule,
    NbRadioModule,
    NbSpinnerModule,
    NbTabsetModule,
    NbStepperModule,
    NbCalendarRangeModule,
    NbCalendarModule,
    NbListModule,

    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    CoursesComponent,
    CourseComponent,
    LessonComponent,
    SafePipe,
  ],
})
export class PagesModule {
}
