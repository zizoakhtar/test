import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { IStudents } from './students.model';
import { Router } from '@angular/router';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public service = new StudentsService();
  public students: IStudents[] = [];
  delete: () => void;

  constructor(private router: Router) {}
  ngOnInit() {
    this.service.getStudents().subscribe(data => {
      this.students = data;
    })
  }

  click(id) {    
    this.router.navigate(['/details',id])

  }

  deleteStudent(id) {
    for(let i=0; i< this.students.length; ++i) {
      if (this.students[i].id === id) {
        this.students.splice(i,1);
      }
    }
  }
}