import {Component, OnInit} from '@angular/core';
import {Topic} from "../../core/models/topic.model";
import {TopicService} from "../../core/services/topic.service";
import {Observable} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/models/user.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../core/services/auth.service";
import {SessionService} from "../../core/services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public topics!: Topic[];
  public user!: User;

  public form = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
  });

  constructor(
    private topicService: TopicService,
    private fb: FormBuilder,
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.authService.me().subscribe({
      next: user => {
        this.user = user;
      }
    });

    this.topicService.getSubscribedTopicsByUser()
    .subscribe(topics => {
      this.topics = topics;
    })
  }

  public submit(): void {
    const user = this.form.value as User;

    if (this.form.valid) {
      this.userService
        .update(user)
        .subscribe({
          next: () => {
            this.sessionService.logOut();
            this.matSnackBar.open('Compte mis à jour avec succès !', 'Fermer', { duration: 3000 });
            this.router.navigateByUrl('/login');
          }
        })
    }
  }

}
