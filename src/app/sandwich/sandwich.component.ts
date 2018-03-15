import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sandwich } from '../sandwich';
import { SandwichService } from '../sandwich.service';

@Component({
  selector: 'app-sandwich',
  templateUrl: './sandwich.component.html',
  styleUrls: ['./sandwich.component.css']
})
export class SandwichComponent implements OnInit {

  sandwichForm: FormGroup;
  sandwiches: Sandwich[];

  constructor(private formBuiler: FormBuilder, private sandwichService: SandwichService) {
    this.createForm();
   }

  ngOnInit() {
    this.getSandwiches();
  }

  getSandwiches(): void {
    this.sandwichService.getSandwiches()
    .subscribe(sandwiches => this.sandwiches = sandwiches);
  }

  createForm(): void {
    this.sandwichForm = this.formBuiler.group({
      name: ['', Validators.required ]
    });
  }

}
