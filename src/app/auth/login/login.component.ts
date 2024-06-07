import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors: string[] = [];
  messages: string[] = [];
  showMessages: any = {};
  submitted: boolean = false;
  //rememberMe: Boolean = false;
  done: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    console.log('Login Component Initialized');
  }

  get f() { return this.loginForm.controls; }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      //rememberMe: [false],
    })

  }

  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.auth.login(email, password).then(() => {
      const role = this.auth.role;
      if (role === 'admin') {
        this.router.navigate(['/pages/dashboard']);
      } else if (role === 'user') {
        this.router.navigate(['/pages/iot-dashboard']);
      } else if (role === 'guest') {
        this.router.navigate(['/pages/forms']);
      }
    }).catch((error) => {
      this.errors = ['Invalid email or password'];
      this.submitted = false;
    });
  }

}
