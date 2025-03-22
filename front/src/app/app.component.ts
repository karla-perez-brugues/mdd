import {Component, OnInit} from '@angular/core';
import {AuthService} from "./core/services/auth.service";
import {SessionService} from "./core/services/session.service";
import {User} from "./core/models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
  ) {}

  public ngOnInit(): void {
    this.autoLog();
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
