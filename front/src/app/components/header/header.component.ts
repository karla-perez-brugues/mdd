import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../core/services/session.service";
import {Observable} from "rxjs";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isMenuOpen = this.appComponent.isMenuOpen;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private appComponent: AppComponent,
  ) {
  }

  public $isLogged(): Observable<boolean> {
    return this.sessionService.$isLogged();
  }

  public logout(): void {
    this.sessionService.logOut();
    this.router.navigate(['']);
  }

  public showMenu(): void {
    this.appComponent.showMenu();
  }

}
