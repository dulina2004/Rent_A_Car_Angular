import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Form, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
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

  register() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.register(this.signupForm.value).subscribe((res) => {
        console.log(res);
        if (res.id != null) {
          console.log(res.id);
          // Custom toastr configuration
          this.toastr.success('Register success', '', {
            timeOut: 2500, // 3 seconds timeout
            positionClass: 'toast-top-center', // Custom position class for top center
            progressBar: true, // Optional: shows a progress bar
          });
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 2000);
        } else {
          this.toastr.error('Register failed');
        }
      });
    }
  }
}
