import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { LogoutComponent } from '../auth/logout/logout.component';
import { RoleGuardServiceGuard } from '../auth/role-guard-service.guard';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { LessonComponent } from './courses/lesson/lesson.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
      canActivate: [RoleGuardServiceGuard],
      data: { expectedRoles: ['admin'] }
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
      canActivate: [RoleGuardServiceGuard],
      data: { expectedRoles: ['user'] }
    },
    /* *************************************************************************************************************************** */
    {
      path: 'courses',
      component: CoursesComponent,
      canActivate: [RoleGuardServiceGuard],
      data: { expectedRoles: ['admin', 'user'] }
    },
    {
      path: 'course/:id',
      component: CourseComponent,
      canActivate: [RoleGuardServiceGuard],
      data: { expectedRoles: ['admin', 'user'] }
    },
    {
      path: 'course/:courseId/lesson/:lessonId',
      component: LessonComponent,
      canActivate: [RoleGuardServiceGuard],
      data: { expectedRoles: ['admin', 'user'] }
    },
    /* *************************************************************************************************************************** */

    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },

    {
      path: 'salir',
      component: LogoutComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
