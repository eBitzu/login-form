import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { ILoginData } from 'src/app/shared/models/interfaces';
import { RoutesNames } from 'src/app/shared/models/routes';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    pass: this.fb.control('', Validators.required),
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {}

  submit() {
    const loginData: ILoginData = this.loginForm.value;
    this.registerService
      .checkLogin(loginData)
      .pipe(
        take(1),
        catchError((err) => {
          console.error(err);
          return of(false);
        })
      )
      .subscribe((valid: true) => {
        if (!valid) {
          alert('Login failed!');
          return;
        }
        this.router.navigate([RoutesNames.home]);
      });
  }
}
