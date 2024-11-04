import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login form data:', this.loginForm.value);
      // this.authService.login(this.loginForm.value).subscribe(
      //   (res) => {
      //     console.log(res);
      //     if (res.success) {
      //       this.toastr.success('Login successful', '', {
      //         timeOut: 2500,
      //         positionClass: 'toast-top-center',
      //         progressBar: true,
      //       });
      //       this.router.navigate(['dashboard']); // Change 'dashboard' to your desired route
      //     } else {
      //       this.toastr.error('Login failed: ' + res.message);
      //     }
      //   },
      //   (err) => {
      //     this.toastr.error('An error occurred during login.');
      //     console.error(err);
      //   }
      // );
    }
  }
}
