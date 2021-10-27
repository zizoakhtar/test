import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentsPageComponent } from './students/students-page.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'students', component: StudentsPageComponent },
  {path: 'details/:id', component: DetailsComponent},
  { path: '**', redirectTo: 'students' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
