import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item.model';


@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  lunchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private db: AngularFireDatabase) {
    this.createForm();
  }

  entreeObservable: Observable<any[]>;
  complementObservable: Observable<any[]>;

  entree: Item[];
  complements: Item[];

  ngOnInit() {
    // this.getCourses();
    // this.getComplements();
    this.entreeObservable = this.getCourses('/Item/Entree');
    this.complementObservable = this.getAppetizer('/Item/Appetizer');
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getAppetizer(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  createForm(): void {
    this.lunchForm = this.formBuilder.group({
      course: ['', Validators.required ], // FormControl called course
      complement1: ['', Validators.required ], // FormControl called complement1
      complement2: ['', Validators.required ] // FormControl called complement2
    });
  }

}
