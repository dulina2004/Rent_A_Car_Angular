import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../../services/storage/storage.service';

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
      this.authService.login(this.loginForm.value).subscribe(
        (res) => {
          console.log(res);
          if (res.userId != null) {
            const user = {
              id: res.userId,
              role: res.userRole,
            };
            console.log(user);
            StorageService.saveUser(user);
            StorageService.saveToken(res.jwt);
            this.toastr.success('Login successful', '', {
              timeOut: 2500,
              positionClass: 'toast-top-center',
              progressBar: true,
            });
            console.log(StorageService.isAdminLoggedIn());
            console.log(StorageService.isCustomerLoggedIn());
            if (StorageService.isAdminLoggedIn()) {
              this.router.navigateByUrl('/admin/dashboard');
            } else if (StorageService.isCustomerLoggedIn()) {
              this.router.navigateByUrl('/customer/dashboard');
            } else {
              this.toastr.error('Login unsuccessful', '', {
                timeOut: 2500,
                positionClass: 'toast-top-center',
                progressBar: true,
              });
            }
          } else {
            this.toastr.error('Login failed: ' + res.message);
          }
        },
        (err) => {
          this.toastr.error('An error occurred during login.');
          console.error(err);
        }
      );
    }
  }
}
