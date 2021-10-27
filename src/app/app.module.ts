import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsPageComponent } from './students/students-page.component';
import { StudentListComponent } from './students/student-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { StudentsService } from './students/students.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsPageComponent,
    StudentListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
