import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICountryData, IUserData } from 'src/app/shared/models/interfaces';
import { RoutesNames } from 'src/app/shared/models/routes';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [],
})
export class SignUpComponent implements OnInit {
  signInForm: FormGroup = this.fb.group({
    email: this.fb.control('', [Validators.email, Validators.required]),
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    pass: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    country: this.fb.control(null, [Validators.required]),
  });
  tnc = this.fb.control(false, Validators.required);
  countries$: Observable<ICountryData[]>;
  constructor(
    private fb: FormBuilder,
    private rs: RegisterService,
    private router: Router
  ) {}

  submit() {
    const formValues = { ...this.signInForm.value, token: null };
    this.rs.signUp(formValues as IUserData);
  }

  ngOnInit() {
    this.countries$ = this.rs.getCountries();
  }
  goToLogin() {
    this.router.navigate([RoutesNames.login]);
  }
}
