import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RegisterRequest} from "../../../core/interfaces/registerRequest.interface";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private strongPasswordRegx: string = '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=.*[0-9])(?=.*[!$%@#£€*?&])[a-zA-Z0-9!$%@#£€*?&]{8,40}$';
  public onError = false;

  public form = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern(this.strongPasswordRegx)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private matSnackBar: MatSnackBar,
    private router: Router,
  ) {}

  public submit(): void {
    const registerRequest = this.form.value as RegisterRequest;

    if (this.form.valid) {
      this.authService
        .register(registerRequest)
        .subscribe({
          next: () => {
            this.matSnackBar.open('Compte créé avec succes !', 'Fermer', { duration: 3000 });
            this.router.navigateByUrl('/login');
          },
          error: error =>  this.onError = true,
        });
    }
  }

}
