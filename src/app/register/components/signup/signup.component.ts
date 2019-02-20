import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signin.component.html',
  styles: [],
})
export class SignUpComponent {
  signInForm: FormGroup = this.fb.group({
    email: this.fb.control('', [Validators.email, Validators.required]),
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    pass: this.fb.control('', [Validators.required]),
    country: this.fb.control('', [Validators.required]),
  });
  constructor(private fb: FormBuilder) {}

  submit() {
    //
  }
}
