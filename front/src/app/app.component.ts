import {Component, OnInit} from '@angular/core';
import {AuthService} from "./core/services/auth.service";
import {SessionService} from "./core/services/session.service";
import {User} from "./core/models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isMenuOpen: boolean = false;

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.autoLog();
  }

  public showMenu(): void {
    this.isMenuOpen = true;
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }

  public logout(): void {
    this.sessionService.logOut();
    this.isMenuOpen = false;
    this.router.navigate(['']);
  }

  private autoLog(): void {
    this.authService.me().subscribe({
      next: (user: User) => {
        this.sessionService.logIn(user);
      },
      error: err => this.sessionService.logOut()
    }
    )
  }

}
