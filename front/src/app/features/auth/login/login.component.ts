import { Component } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {SessionInformation} from "../../../core/interfaces/sessionInformation.interface";
import {SessionService} from "../../../core/services/session.service";
import {Router} from "@angular/router";
import {LoginRequest} from "../../../core/interfaces/loginRequest.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public onError = false;

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',  [Validators.required, Validators.min(3)]]
  });

  constructor(
      private authService: AuthService,
      private fb: FormBuilder,
      private sessionService: SessionService,
      private router: Router,
  ) {}

  public submit(): void {
    const loginRequest = this.form.value as LoginRequest;

    this.authService.login(loginRequest).subscribe({
      next: (response: SessionInformation) => {
        this.sessionService.logIn(response);
        this.router.navigate(['/posts']);
      },
      error: error => this.onError = true,
    });
  }

}
