import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewCoursesComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
