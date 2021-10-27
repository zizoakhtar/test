import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students/students.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id = null
  student = null
  constructor(private service: StudentsService,
              private router: Router,
              private route: ActivatedRoute) {
                route.params.subscribe(res => {
                  this.id = res['id']
                })
               }

  ngOnInit(): void {
    this.getDetails()
  }

  back() {
    this.router.navigate(['/students'])
  }

  getDetails() {
    console.log(this.id)
    this.service.getStudentById(parseInt(this.id)-1).subscribe(res => {
      console.log(res)
      this.student = res
    })
  }

}
