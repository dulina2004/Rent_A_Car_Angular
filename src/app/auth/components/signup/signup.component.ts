import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Form, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.conformationValidate]],
    });
  }
  conformationValidate = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value != this.signupForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  onSubmit() {
    if (this.signupForm.valid) {
      // Handle sign-up logic here
      console.log(this.signupForm.value);
    }
  }
}
