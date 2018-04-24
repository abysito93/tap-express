import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { MainCourse } from '../main-course';
import { Complement } from '../complement';
import { Plate } from '../plate';

import { MainCourseService } from '../main-course.service';
import { ComplementService } from '../complement.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  lunchForm: FormGroup;

  constructor(private mainCourseService: MainCourseService, private complementService: ComplementService, private formBuilder: FormBuilder, private db: AngularFireDatabase) {
    this.createForm();
  }

  mainCourseObservable: Observable<any[]>;

  courses: MainCourse[];
  complements: Complement[];
  plate: Plate[];

  ngOnInit() {
    // this.getCourses();
    this.getComplements();
    this.mainCourseObservable = this.getCourses('/mainCourse');
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getComplements(): void {
    this.complementService.getComplements()
    .subscribe(complements => this.complements = complements);
  }

  createForm(): void {
    this.lunchForm = this.formBuilder.group({
      course: ['', Validators.required ], // FormControl called course
      complement1: ['', Validators.required ], // FormControl called complement1
      complement2: ['', Validators.required ] // FormControl called complement2
    });
  }

}
