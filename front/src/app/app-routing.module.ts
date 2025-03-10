import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {LoginComponent} from "./features/auth/login/login.component";
import {RegisterComponent} from "./features/auth/register/register.component";
import {PostListComponent} from "./features/post/post-list/post-list.component";
import {SinglePostComponent} from "./features/post/single-post/single-post.component";
import {TopicListComponent} from "./features/topic-list/topic-list.component";
import {PostFormComponent} from "./features/post/post-form/post-form.component";
import {UserProfileComponent} from "./features/user-profile/user-profile.component";

// consider a guard combined with canLoad / canActivate route option
// to manage unauthenticated user to access private routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: UserProfileComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: 'posts/create', component: PostFormComponent },
  { path: 'topics', component: TopicListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
