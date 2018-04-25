import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  logForm: FormGroup;
  signForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.createLogForm();
    this.createSignForm();
   }

  ngOnInit() {
  }

  createLogForm(): void {
    this.logForm = this.formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ] 
    });
  }

  createSignForm(): void {
    this.signForm = this.formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ],
      confirmPassword: ['', Validators.required ]
    })
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

}
